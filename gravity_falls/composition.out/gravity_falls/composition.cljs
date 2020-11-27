(ns gravity-falls.composition
  (:require [rhapsody.live :refer-macros [import-live!]]))

(defonce live (import-live!))

;; Composition

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

(console.log "foo")

(play! (connect-> (lead-inst {:pitch 420})) 1)

(def opening
  (->> (phrase (repeat 1)
               [0 1 2 3 2 1])
       (all :instrument lead-inst)
       (tempo (bpm 80))
       (where :pitch (comp D minor))))

(defn live-fn [prev]
  opening
  )

;; Page initialisation

(defn midi-note-on [e]
  (let [note (:note e)
        freq (temp-equal (:number note))]
    (play! (connect->
            (lead-inst {:pitch freq}))
           1)))

(defn ^:export run []
  (loop! #'live-fn)
  (set-midi-listener! "noteon" #'midi-note-on))
