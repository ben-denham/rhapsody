(ns rhapsody.lib.midi
  (:require [webmidi.webmidi]))

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
