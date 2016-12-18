(ns cljs-music.core
  (:require [clojure.string :as s]
            [cemerick.url :refer [url]]
            [dommy.core :refer [replace-contents!]]
            [crate.core :refer [html]])
  (:require-macros [cljs-music.lib.macros :refer [get-compositions-namespaces
                                                  require-namespace-string]]
                   [dommy.core :refer [sel1]]))

(defn namespace->link [namespace]
  (let [href (str "?ns=" namespace)
        title (last (s/split (str namespace) "."))]
    [:a {:href href} title]))

(defn render-menu []
  (replace-contents!
   (sel1 :#app)
   (html [:ul
          (map (fn [namespace]
                 [:li (namespace->link namespace)])
               (get-compositions-namespaces))])))

(let [page-url (-> js/window .-location .-href url)]
  (if-let [namespace (get-in page-url [:query "ns"])]
    (let [goog-namespace (s/replace namespace "-" "_")]
      (js/goog.require goog-namespace))
    (render-menu)))
