(ns cljs-music.core
  (:require [clojure.string :as s]
            [cemerick.url :refer [url]]
            [dommy.core :refer [replace-contents!]]
            [crate.core :refer [html]])
  (:require-macros [cljs-music.lib.macros :refer [get-compositions-namespaces
                                                  require-namespace-string]]
                   [dommy.core :refer [sel1]]))

(defn namespace->parts [namespace]
  (s/split (str namespace) "."))

(defn namespace->link [namespace]
  (let [title (first (namespace->parts namespace))
        href (str title "/play.html")]
    [:a {:href href} title]))

(defn composition-namespace? [namespace]
  (= "composition" (last (namespace->parts namespace))))

(defn render-menu []
  (replace-contents!
   (sel1 :#app)
   (html [:ul
          (map (fn [namespace]
                 [:li (namespace->link namespace)])
               (filter composition-namespace?
                       (get-compositions-namespaces)))])))

(render-menu)
