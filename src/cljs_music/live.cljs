(ns cljs-music.live
  (:require [leipzig.temperament :as temperament]
            [leipzig.temperament :as melody]
            [cljs-bach.synthesis :as synthesis]))

(defn play! [audiocontext notes]
  (doseq [{:keys [time duration instrument] :as note} notes]
    (let [at (+ time (.-currentTime audiocontext))
          synth-instance (-> note
                             (update :pitch temperament/equal)
                             (dissoc :time)
                             instrument)
          connected-instance (synthesis/connect synth-instance synthesis/destination)]
      (connected-instance audiocontext at duration))))

(defn loop!
  ([live-fn context]
   (loop! live-fn context []))
  ([live-fn context prev-notes]
   (let [notes (live-fn prev-notes)
         delay (* 1000 (leipzig.melody/duration notes))]
     (play! context notes)
     (js/setTimeout #(loop! live-fn context notes) delay))))
