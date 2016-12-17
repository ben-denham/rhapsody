(ns user
  (:require
   [figwheel-sidecar.repl-api :as f]))

;; user is a namespace that the Clojure runtime looks for and
;; loads if its available

;; You can place helper functions in here. This is great for starting
;; and stopping your webserver and other development services

;; The definitions in here will be available if you run "lein repl" or launch a
;; Clojure repl some other way

;; You have to ensure that the libraries you :require are listed in your dependencies

;; Once you start down this path
;; you will probably want to look at
;; tools.namespace https://github.com/clojure/tools.namespace
;; and Component https://github.com/stuartsierra/component


(defn fig-start!
  "This starts the figwheel server and repl with the watch based
  auto-compiler."
  [& {:keys [autobuild]
      :or {autobuild true}}]
  ;; this call will only work are long as your :cljsbuild and
  ;; :figwheel configurations are at the top level of your project.clj
  ;; and are not spread across different lein profilesotherwise you
  ;; can pass a configuration into start-figwheel! manually
  (f/start-figwheel!)
  (when (not autobuild)
    (f/stop-autobuild))
  (f/cljs-repl))

(defn fig-repl
  "This opens a new repl for a running figwheel server."
  []
  (f/cljs-repl))
