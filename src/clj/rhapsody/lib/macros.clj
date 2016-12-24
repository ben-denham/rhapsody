(ns rhapsody.lib.macros
  (:require [clojure.java.io :refer [file]]
            [clojure.tools.namespace.find :refer [find-namespaces-in-dir cljs]]))

(defmacro get-compositions-namespaces []
  (let [dir (file "compositions")]
    `(quote ~(find-namespaces-in-dir dir cljs))))

(defmacro require-namespace-string [namespace]
  `(require (quote ~(symbol namespace))))

(defn namespace-old-vars [{:keys [vars ns]}]
  (map #(symbol (name ns) (name %)) vars))

(defn namespace-new-vars [{:keys [vars var-prefix]}]
  (if var-prefix
    (map #(symbol (str var-prefix (name %))) vars)
    vars))

(defn namespace-defs [namespace]
  (map (fn [old-var new-var]
         `(def ~new-var ~old-var))
       (namespace-old-vars namespace)
       (namespace-new-vars namespace)))

(defmacro import-namespace-vars [namespaces]
  `(do
     ~@(mapcat namespace-defs namespaces)))
