(ns cljs-music.live
  (:require [leipzig.temperament]
            [leipzig.melody]
            [leipzig.chord]
            [leipzig.scale]
            [cljs-bach.synthesis]
            [cljs-music.lib.web-audio]
            [cljs-music.lib.midi])
  (:require-macros [cljs-music.live :refer [import-live!]]))

(import-live!)
