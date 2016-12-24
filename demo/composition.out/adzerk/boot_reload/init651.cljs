(ns adzerk.boot-reload.init651 (:require [adzerk.boot-reload.client :as client]))
(client/connect "ws://localhost:1813" {:ws-host nil, :asset-host nil, :on-jsload (fn* [] (+))})