# Visuals and interactivity

This guide will show you how you can add visuals (e.g. images,
animations, etc.) and interactivity (e.g. MIDI input) to your
compositions.

## 1. Enhancing the webpage

Each composition you create is simply a webpage that will execute some
JavaScript code (compiled from the ClojureScript you write) to play
the music.

You can add whatever you like to the `play.html` in your composition,
including additional HTML (for text, images, etc.), CSS (for styling
the HTML) or additional ClojureScript for adding interactivity to the
page (such as).

If you are not familiar with creating web pages, see the "Web
programming" section of the [Additional resources](8-resources.md).

## 2. Drawing and Animations

[Quil](http://quil.info/) is a ClojureScript library that you can add
to Rhapsody that will allow you to create drawings and animations to
accompany your compositions.

You will need to add `[quil "2.5.0"]` (or whatever the latest version
of Quil is) to the `App deps` list in `build.boot`, and add the
following requirement at the top of your composition's
`composition.cljs`:

``` clojure
[quil.core :as q]
```

Then, see the
[quil documentation](https://github.com/quil/quil/wiki/ClojureScript#usage-details)
on how to add a "sketch" to your page.

## 3. Accepting MIDI input

If you have a MIDI input device (such as a MIDI keyboard, MIDI
controller, or a virtual MIDI device
(e.g. [VMPK](http://vmpk.sourceforge.net/))), then you can react to
MIDI messages from those devices in your ClojureScript.

To do so, use the `set-midi-listener!` function provided by Rhapsody:

``` clojure
;; Define a function to handle MIDI "note-on" events.
(defn midi-note-on [event]
  (let [note (midi-event-note event temp-equal)]
    ;; Play a ping sound at the pitch determined by the midi note for
    ;; one second.
    (play! (ping note) duration-secs)))

;; Set the midi listener in the run function so that it is only
;; called once.
(defn ^:export run []
  (set-midi-listener! "noteon" #'midi-note-on))
```

## 4. Managing state

In Clojure and ClojureScript, you cannot change the values of normal
"variables" (with the exception being when you change a hard-coded
value and the code is recompiled). To store and update a value over
time, you must use an atom:

``` clojure
;; An atom can store any value, in this case, a number.
(def my-atom (atom 1))

;; Apply the increment function to the atom to increase its value by
;; one
(swap! my-atom inc)

;; Print the new value
(println @my-atom) ;; => 2

;; Set the atom's value directly.
(reset! my-atom 5)

;; Print the new value
(println @my-atom) ;; => 5
```

You can also use `input` nodes to dynamically control instruments,
which is especially useful when driven by MIDI `"controlchange"`
events:

``` clojure
(defonce gain-input (make-input! audio-context 10.0))

(defn lead-inst [note]
  (connect->
   (sine (:pitch note))
   ;; Note the use of `jack` to allow the input node
   ;; to be used as a source node.
   (gain (jack gain-input))))

(defn midi-control-change [e]
  ;; The value of a controlchange event will vary from 0-127.
  ;; Other than immediately setting an input, you can also
  ;; change it gradually with lin-ramp-input! or exp-ramp-input!
  (set-input! gain-input (/ (:value e) 10.0)))

(defn ^:export run []
  (set-midi-listener! "controlchange" #'midi-control-change))
```

## Up next

[Performance considerations](7-performance.md)
