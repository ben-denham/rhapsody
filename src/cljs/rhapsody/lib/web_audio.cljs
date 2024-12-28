(ns rhapsody.lib.web-audio
  (:require [leipzig.temperament :as temperament]
            [leipzig.melody :as melody]
            [cljs-bach.synthesis :as synth]
            [web-audio.constant-source-node]
            [audio-loader.audio-loader]))

;; Enable the ConstantSourceNode polyfill.
(.polyfill js/ConstantSourceNode)

(def ^:dynamic *debug* false)
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
   (play-notes! notes nil))
  ([notes default-instrument]
   (play-notes! notes default-instrument (+ default-delay-secs (now))))
  ([notes default-instrument at]
   (when *debug*
     (do
       (js/console.log "--- play! ---")
       (js/console.log "Now: " (now))
       (js/console.log "Scheduled start: " at)
       (js/console.log "Time until scheduled start: " (- at (now)))
       (js/console.log "Notes duration: " (melody/duration notes))))
   (doseq [{:keys [time duration instrument] :as note} notes]
     (if-let [inst (or instrument default-instrument)]
       (-> note
           (assoc :midi (:pitch note))
           (update :pitch temperament/equal)
           (dissoc :time)
           inst
           (play! duration (+ time at))))
     (when *debug*
       (js/console.log "Skipping note with no instrument")))
   (when *debug*
     (js/console.log "Scheduling finished: " (now)))))

(defn loop!
  ([live-fn]
   (let [delay (melody/duration (live-fn []))]
     (loop! live-fn [] (+ (now) delay))))
  ([live-fn prev-notes at]
   (let [notes (live-fn prev-notes)
         notes-dur (melody/duration notes)
         next-at (+ at notes-dur)
         next-loop (+ at (/ notes-dur 2))
         loop-delay (- next-loop (now))
         loop-delay-ms (* 1000 loop-delay)]
     (play-notes! notes nil at)
     (js/setTimeout #(loop! live-fn notes next-at) loop-delay-ms))))

(defn pause! []
  (.suspend audio-context))

(defn resume! []
  (.resume audio-context))


;; Mutable source nodes.

(defn set-input! [input val]
  "Set the value of an input (with immediate effect)."
  (set! (-> input .-offset .-value) val))

(defn make-input! [context init-val]
  "Create a mutable 'input' (constant source node)."
  (let [input (.createConstantSource context)]
    (doto input
      (.start)
      (set-input! init-val))))

(defn- ramp-end-time [input target vel]
  "Calculates the end time (according to the clock of the given
  input's audio context) for ramping input to the target value at a
  rate of vel (which is the value-change per second)."
  (let [now (-> input .-context .-currentTime)
        current-val (-> input .-offset .-value)
        val-diff (.abs js/Math (- current-val target))
        ramp-duration (/ val-diff vel)]
    (+ now ramp-duration)))

(defn lin-ramp-input! [input target vel]
  "Linearly ramp the given input's value toward the target value at
  the given change/sec velociy."
  (let [end-time (ramp-end-time input target vel)]
    (-> input .-offset (.linearRampToValueAtTime target end-time))))

(defn exp-ramp-input! [input target vel]
  "Exponentially ramp the given input's value toward the target value
  at the given change/sec velociy."
  (let [end-time (ramp-end-time input target vel)]
    (-> input .-offset (.exponentialRampToValueAtTime target end-time))))

(defn jack [input]
  "Wrap an input so that it can be used as a source node."
  (fn [context at duration]
    (synth/subgraph input)))


;; MIDI instruments

(defn note-to-midi-key
  ""
  [note]
  (let [keys ["C" "Db" "D" "Eb" "E" "F" "Gb" "G" "Ab" "A" "Bb" "B"]
        key (nth keys (mod note 12))
        octave (- (js/Math.floor (/ note 12)) 1)]
    (str key octave)))

(defn load-midi-inst
  "Load audio buffers for a MIDI instrument.

  If :name is provided, load the instrument with the given name from a
  MIDI.js soundfount:
  https://github.com/gleitz/midi-js-soundfonts. Instruments listed on
  that page, along with valid overridesfor :soundfont and :format.

  If :url is provided, it is assumed to be to an instrument in a
  MIDI.js soundfont formatted JS file."
  [& {:keys [url name soundfont format]
      :or {format "mp3"}}]
  (let [soundfont
        (if (nil? soundfont)
          ;; Only FluidR3_GM has percussion, but MusyngKite
          ;; is higher quality.
          (if (= name "percussion")
            "FluidR3_GM"
            "MusyngKite")
          soundfont)
        soundfont-url
        (cond (some? url) url
              (some? name) (str "https://gleitz.github.io/midi-js-soundfonts/"
                                soundfont "/" name "-" format ".js")
              :else (throw (js/Error. "No instrument :url or :name provided.")))
        midi-inst #js {"buffers" (js-obj)
                       "buffersLoaded" 0
                       "loadedPromise" nil}]
    ;; Set a loadedPromise that will resolve when the audio buffers
    ;; have been loaded.
    (set! (.-loadedPromise midi-inst)
          (new js/Promise
               (fn [resolve reject]
                 (.then (js/loadAudio soundfont-url)
                        (fn [buffers]
                          (set! (.. midi-inst -buffers) buffers)
                          (resolve midi-inst))))))
    midi-inst))

(defn await-midi-insts
  "Execute callback when all midi-insts have fully loaded."
  [midi-insts callback]
  (.then (->> midi-insts
              (map #(aget % "loadedPromise"))
              clj->js
              js/Promise.all)
         callback))

(defn midi-note
  "Play a note (for the given MIDI note number) on the given midi-inst."
  [midi-inst note-num]
  (fn [context at duration]
    (synth/source
     (let [node (doto (.createBufferSource context)
                  (.start at)
                  ;; Allow time for release.
                  (.stop (+ at duration 1.0)))
           midi-key (note-to-midi-key note-num)
           buffer (aget midi-inst "buffers" midi-key)]
       ;; Buffer will be empty if midi-key was not found in buffers.
       (when buffer
         (set! (.-buffer node) buffer))
       node))))
