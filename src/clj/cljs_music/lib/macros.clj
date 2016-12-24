(ns cljs-music.lib.macros
  (:require [clojure.java.io :refer [file]]
            [clojure.tools.namespace.find :refer [find-namespaces-in-dir cljs]]))

(defmacro get-compositions-namespaces []
  (let [dir (file "compositions")]
    `(quote ~(find-namespaces-in-dir dir cljs))))

(defmacro require-namespace-string [namespace]
  `(require (quote ~(symbol namespace))))

(defn namespace-old-vars [{:keys [vars ns]}]
  (map #(symbol (name ns) (name %)) vars))

(defn namespace-new-vars [{:keys [vars var-prefix]}]
  (if var-prefix
    (map #(symbol (str var-prefix (name %))) vars)
    vars))

(defn namespace-defs [namespace]
  (map (fn [old-var new-var]
         `(def ~new-var ~old-var))
       (namespace-old-vars namespace)
       (namespace-new-vars namespace)))

(defmacro import-namespace-vars [namespaces]
  `(do
     ~@(mapcat namespace-defs namespaces)))

(defmacro import-live! []
  '(cljs-music.lib.macros/import-namespace-vars
    [{:ns cljs-bach.synthesis
      :vars [run-with destination
             current-time

             connect-> add            ; Synth connectors

             high-pass low-pass       ; Frequency filters

             sawtooth sine square     ; Signal generators
             triangle white-noise
             constant

             adsr gain percussive     ; Signal shapers
             adshr envelope

             stereo-panner reverb     ; Effects
             delay-line enhance]}
     {:ns leipzig.scale
      :vars [A B C D E F G            ; Keys
             flat high low sharp      ; Key modifiers
             major minor ionian       ; Scales
             dorian phrygian lydian
             mixolydian aeolian
             locrian blues pentatonic
             raise lower]}            ; Degree modifiers
     {:ns leipzig.chord
      :vars [triad seventh ninth      ; Chords
             inversion root augment]} ; Chord modifiers
     {:ns leipzig.melody
      :vars [phrase then times with   ; Melody makers
             rhythm having
             all bpm tempo where      ; Melody modifiers
             after wherever duration]}
     {:ns leipzig.temperament
      :var-prefix "temp-"
      :vars [equal five-limit-just
             just meantone pythagorean
             pythagorean-comma
             seven-limit-just well
             werckmeister-i
             werckmeister-ii
             werckmeister-iii]}
     {:ns cljs-music.lib.web-audio
      :vars [play! play-notes!
             now loop!]}
     {:ns cljs-music.lib.midi
      :vars [set-midi-listener!]}]))
