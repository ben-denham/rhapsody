(ns rhapsody.lib.web-audio
  (:require [leipzig.temperament :as temperament]
            [leipzig.melody :as melody]
            [cljs-bach.synthesis :as synth]))

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
   (play! notes (+ default-delay-secs (now))))
  ([notes at]
   (when *debug*
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
         (play! duration (+ time at))))
   (when *debug*
     (js/console.log "Scheduling finished: " (now)))))

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

(defn pause! []
  (.suspend audio-context))

(defn resume! []
  (.resume audio-context))
