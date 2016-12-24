(set-env!
 :source-paths #{"src/cljs" "src/clj" "compositions"}
 :resource-paths #{"src/html" "compositions"}

 :dependencies '[[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.293"]

                 ; Boot deps
                 [adzerk/boot-cljs "1.7.228-2"]
                 [pandeiro/boot-http "0.7.0"]
                 [adzerk/boot-reload "0.4.13"]
                 [adzerk/boot-cljs-repl "0.3.3"]
                 [com.cemerick/piggieback "0.2.1"]     ;; needed by bREPL
                 [weasel "0.7.0"]                      ;; needed by bREPL
                 [org.clojure/tools.nrepl "0.2.12"]    ;; needed by bREPL
                 [clj-jgit "0.8.9"]

                 ; App deps
                 [org.clojure/tools.namespace "0.3.0-alpha3"]
                 [cljs-bach "0.2.0"]
                 [leipzig "0.10.0"]
                 [com.cemerick/url "0.1.1"]
                 [crate "0.2.4"]
                 [prismatic/dommy "1.1.0"]])

(require '[adzerk.boot-cljs :refer [cljs]]
         '[pandeiro.boot-http :refer [serve]]
         '[adzerk.boot-reload :refer [reload]]
         '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]])

(def dev-output-dir "dev-www")
(def release-output-dir "release-www")

(deftask dev
  "Launch Immediate Feedback Development Environment"
  [r no-reload bool "Disable live-reloading"]
  (comp
   (serve :dir dev-output-dir :port 1812)
   (if no-reload
     (wait) ;; Needed so that the command doesn't exit if we are not
     ;; watching.
     (comp (watch)
           (reload :port 1813 :ws-port 1813)))
   ;; cljs-repl must be before cljs task
   (cljs-repl :port 1814 :ip "0.0.0.0"
              :nrepl-opts {:port 1815 :bind "0.0.0.0"})
   (cljs)
   (target :dir #{dev-output-dir})))

(deftask release
  "Build releasable web app"
  []
  (comp
   (cljs)
   (target :dir #{release-output-dir})))
