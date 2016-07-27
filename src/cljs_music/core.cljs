(ns cljs-music.core
  (:require
   [cljs-bach.synthesis :as synthesis :refer
         [audio-context run-with
          destination current-time

          connect-> add           ; Synth connectors

          high-pass low-pass      ; Frequency filters

          sawtooth sine square    ; Signal generators
          triangle white-noise
          constant

          adsr gain percussive    ; Signal shapers
          adshr envelope

          stereo-panner reverb    ; Effects
          delay-line enhance]]

        [leipzig.scale :refer
         [A B C D E F G           ; Keys
          flat high low sharp     ; Key modifiers
          major minor ionian      ; Scales
          dorian phrygian lydian
          mixolydian aeolian
          locrian blues pentatonic
          raise lower]]           ; Degree modifiers

        [leipzig.chord :refer
         [triad seventh ninth     ; Chords
          inversion root augment]]; Chord modifiers

        [leipzig.melody :refer
         [phrase then times with  ; Melody makers
          rhythm having
          all bpm tempo where     ; Melody modifiers
          after wherever duration]]

        [leipzig.temperament :as temperament]
        [cljs-music.live :refer [loop!]]))

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

(defonce context (audio-context))
(defonce jam (loop! #'live-fn context))

;; MIDI input handling

(defn midi-note-on [e]
  (let [note (.-note e)
        freq (temperament/equal (.-number note))]
    (-> (ping {:pitch freq})
        (connect-> destination)
        (run-with context (current-time context) 1.0))))

(.enable
 js/WebMidi
 (fn []
   (let [inputs (.-inputs js/WebMidi)]
     (doseq [input inputs]
       (js/console.log input)
       (.addListener input "noteon" "all"
                     (fn [e] (midi-note-on e)))))))
