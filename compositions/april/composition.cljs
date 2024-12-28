(ns april.composition
  (:require [rhapsody.live :refer-macros [import-live!]]))

(defonce live (import-live!))

(defonce gain-input (make-input! audio-context 3))

;; Instruments

(defn lead-inst [note]
  (connect->
   (->>
    [[1 0.65] [2 0.35] [4 0.35] [8 0.25] [16 0.25] [32 0.15]]
    (map (fn [[harmonic amp]]
           (connect-> (sine (* harmonic (:pitch note)))
                      (gain amp))))
    (apply add))
   (low-pass (* 2 (:pitch note)))
   (adsr 0.01 0.05 1 0.2)))

(def piano-midi-inst (load-midi-inst :name "acoustic_grand_piano"))
(defn piano-inst [note]
  (connect->
   (midi-note piano-midi-inst (:midi note))
   (gain (jack gain-input))
   (adsr 0.01 0.05 1 1)))

;; Composition

(def opening
  (->> (phrase (repeat 1)
               [0 1 2 3 2 1])
       (all :instrument lead-inst)
       (tempo (bpm 80))
       (where :pitch (comp D minor))))

(defn live-fn [prev]
  ;;opening
  )

;; Page initialisation

(defn midi-note-on [e]
  (let [note (midi-event-note e temp-equal)]
    (play! (piano-inst note) 1)))

(defn midi-control-change [e]
  (js/console.log e)
  (set-input! gain-input (/ (:value e) 10.0)))

(defn ^:export run []
  (await-midi-insts
   [piano-midi-inst]
   (fn []
     (loop! #'live-fn)
     (set-midi-listener! "noteon" #'midi-note-on)
     (set-midi-listener! "controlchange" #'midi-control-change))))
