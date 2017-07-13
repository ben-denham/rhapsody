{:foreign-libs [{:file "js/webmidi.min.js"
                 :provides ["webmidi.webmidi"]}
                {:file "js/constant-source-node.min.js"
                 :provides ["web-audio.constant-source-node"]}]
 ;; We will need to add a webmidi.ext.js file if we ever wish to do
 ;; advanced compilation.
 :externs []}
