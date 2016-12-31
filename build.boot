(set-env!
 :source-paths #{"src" "compositions"}
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
                 [adzerk/boot-template "1.0.0"]

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
         '[adzerk.boot-cljs-repl :refer [cljs-repl] :as boot-cljs-repl]
         '[adzerk.boot-template :as boot-template]
         '[clojure.string :as string]
         '[clojure.java.io :as io])

(def dev-output-dir "dev-www")
(def release-output-dir "release-www")
(def template-dir "template")

(deftask dev
  "Launch Immediate Feedback Development Environment"
  [r no-rebuild bool "Disable automatic re-building"]
  (comp
   (serve :dir dev-output-dir :port 1812)
   (watch :manual no-rebuild)
   (reload :port 1813 :ws-port 1813)
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

(defn- namespace->comp-dir [namespace]
  (-> namespace
      (string/replace "-" "_")
      (#(str "compositions/" %))))

(deftask new-composition
  "Create a new composition from the template."
  [n name VAL sym "Namespace for the new composition"]
  (if-not name
    (do (boot.util/fail "The -n/--name option is required!\n")
        (*usage*))
    (do
      (set-env!
       :source-paths #{}
       :resource-paths #{template-dir})
      (let [name-str (string/lower-case (str name))
            dir-name (namespace->comp-dir name-str)]
        (if (.exists (io/as-file dir-name))
          (boot.util/fail (str "The '" dir-name "' directory already exists.\n"))
          (comp
           (boot-template/template :paths #{"composition.cljs"
                                            "composition.cljs.edn"}
                                   :subs {"name" name-str})
           (target :dir #{dir-name})
           (with-pre-wrap fileset
             (println (str "New composition created in: " dir-name))
             fileset)))))))

(defn start-repl
  []
  ;; Manually rebuild after 5 seconds, to allow time for start-repl to
  ;; update files. This only applies if the dev task was started with
  ;; -r for no automatic reloading.
  (future (Thread/sleep 5000)
          (rebuild!))
  (boot-cljs-repl/start-repl))
