(ns cljs-music.lib.macros)

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

(defmacro import-vars [& namespaces]
  `(do
     ~@(mapcat namespace-defs namespaces)))
