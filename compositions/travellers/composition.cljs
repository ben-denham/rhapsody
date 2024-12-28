(ns travellers.composition
  (:require [rhapsody.live :refer-macros [import-live!]]))

(defonce live (import-live!))

;; Composition

(defn whistle [note]
  (let [pitch (:pitch note)
        duration (:duration note)]
    (connect->
     (add
      ;; Primary whistle with vibrato
      (connect->
       (sine (add (constant pitch)
                  (connect-> (sine 40) (gain 4))))
       (gain 1.0))
      ;; Subtle overtone
      (connect->
       (sine (* 2 pitch))
       (gain 0.05))
      ;; Wind
      (connect->
       white-noise
       (high-pass (* 0.99 pitch))
       (low-pass (* 1.01 pitch))
       (gain 0.1)))
     (adsr (* duration 0.5) 0 1 (* duration 0.65))
     (gain 0.1))))


(def melody-1
  (phrase [1 1 1.5 0.5 0.5 0.5 0.5 0.5 0.5 0.5 1]
          [3 7 9   7   10  9   8   7   8   9   7]))
(def melody-2
  (phrase [1 1 1.5 0.5 0.5 0.5 0.5 0.5 0.5 0.5 0.5 0.5]
          [3 7 9   7   10  9   8   7   8   9   11  9]))
(def base-bpm 92)

(defn esker []
  (->> melody-1
       (then melody-2)
       (all :instrument whistle)
       (tempo (bpm base-bpm))
       (where :pitch (comp G major))))


(defn live-fn [prev]
  (esker))

;; Page initialisation

(defn ^:export run []
  (loop! #'live-fn))

#_(

   (play! (whistle {:pitch 440 :duration 1}) 1)

   (play-notes! (esker))

   )
