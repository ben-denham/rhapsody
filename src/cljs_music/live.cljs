(ns cljs-music.live
  (:require [leipzig.temperament :as temperament]
            [leipzig.melody :as melody]
            [leipzig.chord]
            [leipzig.scale]
            [cljs-bach.synthesis :as synth])
  (:require-macros [cljs-music.macros :refer [import-vars]]))

(def debug false)

;; WebAudio

(defonce audio-context (synth/audio-context))
(def default-delay-secs 0.05)

(defn now []
  (.-currentTime audio-context))

(defn play!
  ([sound-source duration]
   (play! sound-source duration (+ default-delay-secs (now))))
  ([sound-source duration at]
   (let [connected-instance (synth/connect sound-source synth/destination)]
     (connected-instance audio-context at duration))))

(defn play-notes!
  ([notes]
   (play! notes (+ default-delay-secs (now))))
  ([notes at]
   (when debug
     (do
       (js/console.log "--- play! ---")
       (js/console.log "Now: " (now))
       (js/console.log "Scheduled start: " at)
       (js/console.log "Time until scheduled start: " (- at (now)))
       (js/console.log "Notes duration: " (melody/duration notes))))
   (doseq [{:keys [time duration instrument] :as note} notes]
     (-> note
         (update :pitch temperament/equal)
         (dissoc :time)
         instrument
         (play! duration (+ time at))))))

(defn loop!
  ([live-fn]
   (loop! live-fn [] (+ default-delay-secs (now))))
  ([live-fn prev-notes at]
   (let [notes (live-fn prev-notes)
         notes-dur (melody/duration notes)
         next-at (+ at notes-dur)
         next-loop (+ at (/ notes-dur 2))
         loop-delay (- next-loop (now))
         loop-delay-ms (* 1000 loop-delay)]
     (play-notes! notes at)
     (js/setTimeout #(loop! live-fn notes next-at) loop-delay-ms))))

;; MIDI handling

(def midi-initialised (atom false))
(def midi-listener (atom {}))

(defn- midi-handler [type midi-event]
  (let [event-map (js->clj midi-event :keywordize-keys true)
        listener (get @midi-listener type)]
    (listener event-map)))

(defn- midi-init! [type]
  (.enable
   js/WebMidi
   (fn []
     (let [inputs (.-inputs js/WebMidi)]
       (doseq [input inputs]
         (.addListener input type "all" #(midi-handler type %)))))))

(defn set-midi-listener! [type listener]
  (when (not (get @midi-listener type))
    (midi-init! type))
  (swap! midi-listener assoc type listener))

;; Import vars from other namespaces

(import-vars {:ns cljs-bach.synthesis
              :vars [run-with destination
                     current-time

                     connect-> add           ; Synth connectors

                     high-pass low-pass      ; Frequency filters

                     sawtooth sine square    ; Signal generators
                     triangle white-noise
                     constant

                     adsr gain percussive    ; Signal shapers
                     adshr envelope

                     stereo-panner reverb    ; Effects
                     delay-line enhance]}
             {:ns leipzig.scale
              :vars [A B C D E F G           ; Keys
                     flat high low sharp     ; Key modifiers
                     major minor ionian      ; Scales
                     dorian phrygian lydian
                     mixolydian aeolian
                     locrian blues pentatonic
                     raise lower]}           ; Degree modifiers
             {:ns leipzig.chord
              :vars [triad seventh ninth     ; Chords
                     inversion root augment]}; Chord modifiers
             {:ns leipzig.melody
              :vars [phrase then times with  ; Melody makers
                     rhythm having
                     all bpm tempo where     ; Melody modifiers
                     after wherever duration]}
             {:ns leipzig.temperament
              :var-prefix "temp-"
              :vars [equal five-limit-just
                     just meantone pythagorean
                     pythagorean-comma
                     seven-limit-just well
                     werckmeister-i
                     werckmeister-ii
                     werckmeister-iii]})
