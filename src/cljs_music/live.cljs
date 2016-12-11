(ns cljs-music.live
  (:require [leipzig.temperament :as temperament]
            [leipzig.temperament :as melody]
            [cljs-bach.synthesis :as synth]))

(def debug false)

;; Leipzig note playing

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
       (js/console.log "Notes duration: " (leipzig.melody/duration notes))))
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
         notes-dur (leipzig.melody/duration notes)
         next-at (+ at notes-dur)
         next-loop (+ at (/ notes-dur 2))
         loop-delay (- next-loop (now))
         loop-delay-ms (* 1000 loop-delay)]
     (play-notes! notes at)
     (js/setTimeout #(loop! live-fn notes next-at) loop-delay-ms))))

;; MIDI handling

(def midi-initialised (atom false))
(def midi-listener (atom {}))

(defn- midi-init! [type]
  (.enable
   js/WebMidi
   (fn []
     (let [inputs (.-inputs js/WebMidi)]
       (doseq [input inputs]
         (.addListener input type "all"
                       (fn [midi-event]
                         (let [event-map (js->clj midi-event :keywordize-keys true)
                               listener (get @midi-listener type)]
                           (listener event-map)))))))))

(defn set-midi-listener! [type listener]
  (js/console.log (get @midi-listener type))
  (when (not (get @midi-listener type))
    (midi-init! type))
  (swap! midi-listener assoc type listener))
