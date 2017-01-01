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
   (let [connected-instance (synth/connect sound-source synth/destination)
         ;; cljs-bach oscillators add an extra second to durations,
         ;; which can be unexpected.
         adjusted-duration (- duration 1)]
     (connected-instance audio-context at adjusted-duration))))

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
