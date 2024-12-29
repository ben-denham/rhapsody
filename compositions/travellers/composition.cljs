(ns travellers.composition
  (:require [rhapsody.live :refer-macros [import-live!]]
            [quil.core :as q :include-macros true]))

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


(defn base-bpm [] 92)
(defn base-key [] (comp G major))

(defn melody []
  (let [a (phrase [1 1 1.5 0.5]
                  [3 7 9   7])
        b1 (phrase [0.5 0.5 0.5 0.5 0.5 0.5 1]
                   [10  9   8   7   8   9   7])
        b2 (phrase [0.5 0.5 0.5 0.5 0.5 0.5 0.5 0.5]
                   [10  9   8   7   8   9   11  9])]
    (->> a
         (then b1)
         (then a)
         (then b2))))


(defn esker []
  (->> (melody)
       (all :instrument whistle)
       (tempo (bpm (base-bpm)))
       (where :pitch (base-key))))


(defn live-fn [prev]
  (esker))


;; Visuals

(defn draw-star [x y width height]
  (q/triangle
   (- x (/ width 4)) y
   (+ x (/ width 4)) y
   x (+ y (* height 2)))
  (q/triangle
   (- x (/ width 4)) y
   (+ x (/ width 4)) y
   x (- y (* height 2)))
  (q/triangle
   x (- y (/ height 4))
   x (+ y (/ height 4))
   (- x (* width 2)) y)
  (q/triangle
   x (- y (/ height 4))
   x (+ y (/ height 4))
   (+ x (* width 2)) y))

(defn draw []
  (q/background 0 0 0 10)
  (when (= 0 (mod (q/frame-count) 7))
    (q/fill 255)
    (q/no-stroke)
    (dotimes [_ 4]
      (draw-star
       (q/random (q/width)) (q/random (q/height) 2)
       (q/random 30) (q/random 30)))))


;; Page initialisation

(defn ^:export run []
  (loop! #'live-fn)
  (q/defsketch quil-sketch
    :host "app"
    :setup (fn [] (q/frame-rate (/ (base-bpm) 2)))
    :draw draw
    :size [1920 1080]))

#_(

   (play! (whistle {:pitch 440 :duration 1}) 1)

   (play-notes! (esker))

   )
