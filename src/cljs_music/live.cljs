(ns cljs-music.live
  (:require [leipzig.temperament :as temperament]
            [leipzig.temperament :as melody]
            [cljs-bach.synthesis :as synthesis]))

(def debug false)

(def min-offset 1)

(defn play!
  ([audiocontext notes]
   (play! audiocontext notes (+ min-offset (.-currentTime audiocontext))))
  ([audiocontext notes at]
   (when debug
     (do
       (js/console.log "--- play! ---")
       (js/console.log "Now: " (.-currentTime audiocontext))
       (js/console.log "Scheduled start: " at)
       (js/console.log "Time until scheduled start: " (- at (.-currentTime audiocontext)))
       (js/console.log "Notes duration: " (leipzig.melody/duration notes))))
   (doseq [{:keys [time duration instrument] :as note} notes]
     (let [synth-instance (-> note
                              (update :pitch temperament/equal)
                              (dissoc :time)
                              instrument)
           connected-instance (synthesis/connect synth-instance synthesis/destination)]
       (connected-instance audiocontext (+ time at) duration)))))

(defn loop!
  ([live-fn context]
   (loop! live-fn context [] (+ min-offset (.-currentTime context))))
  ([live-fn context prev-notes at]
   (let [notes (live-fn prev-notes)
         now (.-currentTime context)
         notes-dur (leipzig.melody/duration notes)
         next-at (+ at notes-dur)
         next-loop (+ at (/ notes-dur 2))
         loop-delay (- next-loop now)
         loop-delay-ms (* 1000 loop-delay)]
     (play! context notes at)
     (js/setTimeout #(loop! live-fn context notes next-at) loop-delay-ms))))
