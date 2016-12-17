(ns cljs-music.compositions.demo
  (:require [cljs-music.live :refer-macros [import-live!]]))

(defonce live (import-live!))

;; Instruments

(defn ping [note]
  (connect->
   (sawtooth (:pitch note))
   (adsr 0.01 0.1 1 1)
   (low-pass (* 5 (:pitch note)))
   (gain 0.1)))

(defn bell [note]
  (connect->
   (sawtooth (:pitch note))
   (adsr 0.01 0.1 1 0.5)
   (low-pass (* 5 (:pitch note)))
   (gain 0.3)))

(defn bass-inst [note]
  (connect->
   (add (sine (:pitch note))
        (sine (/ (:pitch note) 2)))
   (adsr 0.5 0.5 0.5 16)
   (gain 0.1)))

;; Note patterns

(defn harmony [prev]
  (->> (phrase (cycle [1])
               (map #(-> triad (root %)) [0 4 5 3]))
       (all :instrument ping)))

(defn melody [prev]
  (->> (phrase (cycle [0.5])
               [0 2 4 0 5 7 3 5])
       (all :instrument bell)))

(defn bass [prev]
  (->> (phrase [1]
               [0])
       (all :instrument bass-inst)))

;; Live-coding setup

(defn live-fn [prev]
  (->> (harmony prev)
       (with (melody prev))
       (with (bass prev))
       (tempo (bpm 80))
       (where :pitch (comp C major))))

(defonce jam (loop! #'live-fn))

;; MIDI input handling

(defn midi-note-on [e]
  (let [note (:note e)
        freq (temp-equal (:number note))]
    (play! (connect->
            (ping {:pitch freq})
            (gain 3))
           1)))

(set-midi-listener! "noteon" #'midi-note-on)