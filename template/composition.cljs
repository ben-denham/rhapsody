(ns $name$.composition
  (:require [rhapsody.live :refer-macros [import-live!]]))

(defonce live (import-live!))

;; Composition

(defn live-fn [prev]
  )

(defonce jam (loop! #'live-fn))

;; MIDI input handling

(defn midi-note-on [e]
  )

(set-midi-listener! "noteon" #'midi-note-on)
