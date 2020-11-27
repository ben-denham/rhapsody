(ns winter.composition
  (:require [rhapsody.live :refer-macros [import-live!]]))

(defonce live (import-live!))

;; Composition

;;; Instruments

(defn bass-inst [note]
  (let [multiple-gain [[3 0.1]
                       [2 0.3]
                       [1 0.5]
                       [0.5 0.2]]]
    (connect->
     (apply add (map
                 (fn [[multiple gain-val]]
                   (connect-> (sine (* multiple (:pitch note)))
                              (gain gain-val)))
                 multiple-gain))
     (high-pass 180)
     (adsr 0.15 (- (:duration note) 0.15) 0 0.1)
     (gain 0.8))))

;;; Chords

(def I triad)
(def IV (-> triad (root 3)))
(def V (-> triad (root 4)))
(def vi (-> triad (root 5)))

(def progression [I V vi IV])

(def bass-rhythm [1.5 0.5 1])
(defn bass-arpeg [chord]
  (map #(nth (sort chord) %) (apply concat (repeat 2 [0 1 2]))))

(def bass
  (->> (phrase (cycle bass-rhythm)
               (mapcat bass-arpeg progression))
       (where :pitch lower)
       (all :instrument bass-inst)))

(def bass-fin
  (->> (phrase (concat bass-rhythm bass-rhythm [3])
               (concat (bass-arpeg V) [0]))
       (where :pitch lower)
       (all :instrument bass-inst)))

(defn piece []
  (->> bass
       (then bass)
       (then bass-fin)
       (where :pitch (comp D major))
       (tempo (bpm 90))))

(defn midi-note-on [e]
  (let [note (:note e)
        freq (temp-equal (:number note))]
    (play! (connect->
            (bass-inst {:pitch freq})
            (gain 3))
           1)))

;; Page initialisation

(defn ^:export run []
  (set-midi-listener! "noteon" #'midi-note-on)
  (play-notes! (piece)))
