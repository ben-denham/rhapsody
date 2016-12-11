(ns cljs-music.core
  (:require [cljs-music.live :as l]))

;; Instruments

(defn ping [note]
  (l/connect->
   (l/sawtooth (:pitch note))
   (l/adsr 0.01 0.1 1 1)
   (l/low-pass (* 5 (:pitch note)))
   (l/gain 0.1)))

(defn bell [note]
  (l/connect->
   (l/sawtooth (:pitch note))
   (l/adsr 0.01 0.1 1 0.5)
   (l/low-pass (* 5 (:pitch note)))
   (l/gain 0.3)))

(defn bass-inst [note]
  (l/connect->
   (l/add (l/sine (:pitch note))
        (l/sine (/ (:pitch note) 2)))
   (l/adsr 0.5 0.5 0.5 16)
   (l/gain 0.1)))

;; Note patterns

(defn harmony [prev]
  (->> (l/phrase (cycle [1])
               (map #(-> l/triad (l/root %)) [0 4 5 3]))
       (l/all :instrument ping)))

(defn melody [prev]
  (->> (l/phrase (cycle [0.5])
               [0 2 4 0 5 7 3 5])
       (l/all :instrument bell)))

(defn bass [prev]
  (->> (l/phrase [1]
               [0])
       (l/all :instrument bass-inst)))

;; Live-coding setup

(defn live-fn [prev]
  (->> (harmony prev)
       (l/with (melody prev))
       (l/with (bass prev))
       (l/tempo (l/bpm 80))
       (l/where :pitch (comp l/C l/major))))

(defonce jam (l/loop! #'live-fn))

;; MIDI input handling

(defn midi-note-on [e]
  (let [note (:note e)
        freq (l/temp-equal (:number note))]
    (l/play! (l/connect->
            (ping {:pitch freq})
            (l/gain 3))
           1)))

(l/set-midi-listener! "noteon" #'midi-note-on)
