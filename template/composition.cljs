(ns $name$.composition
  (:require [rhapsody.live :refer-macros [import-live!]]))

(defonce live (import-live!))

;; Composition

(defn live-fn [prev]
  )

;; Page initialisation

(defn ^:export run []
  (loop! #'live-fn))
