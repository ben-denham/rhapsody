(ns $name$.composition
  (:require [rhapsody.live :refer-macros [import-live!]]))

(defonce live (import-live!))

;; Composition

(defn live-fn [prev]
  )

;; Page initialisation

(defn midi-note-on [e]
  (let [note (midi-event-note e temp-equal)]
    ))

(defn ^:export run []
  (await-midi-insts
   []
   (fn []
     (loop! #'live-fn)
     (set-midi-listener! "noteon" #'midi-note-on))))
