# Your first composition

## Step 1. Creating a new composition

To create a new composition, run the `boot new-composition` task:

``` bash
boot new-composition -n my-composition
# Or, if you're using Docker:
do/docker boot new-composition -n my-composition
```

This will create a new `my_composition` directory inside the
`compositions` directory.

`compositions/my_composition` will include three files:

* `play.html`
  * The HTML webpage for the composition. You can edit this file to
    customise the display of the webpage as much as you like, but
    we'll leave it as it is for now.
* `composition.cljs.edn`
  * A file with instructions on how to convert the ClojureScript we
    write into JavaScript that can be executed by the web browser. You
    will probably never need to edit this file.
* `composition.cljs`
  * This is the main ClojureScript file we're you'll create your
    music, we'll only be editing this file for the rest of this
    tutorial.

You can add any other files to your composition directory that you
wish (such as sound files, images, or other web assets).

**Note:** New compositions are created based on the `template`
directory, so you can customise its contents to affect any
compositions you create in future.

## Step 2. Playing a sound

Make sure you have `boot dev` running and open your composition from
this list at `http://localhost:1812`.

Now open `compositions/my_composition/composition.cljs` in your
favourite text editor, and add this line to the end of the file:

``` clojure
(play! (sine 440) 1)
```

You should hear your first sound! (A sine wave at a frequency of 440
Hertz played for 1 second)!

Now try changing the frequency from `440` to `880`. You should hear the
sound again, but this time with a higher pitch.

Notice that the sound is replayed each time you save a change to your
file. This is the "live-reloading" feature of the `boot dev` task at
work.

If you want some code to be execute only once (when the page initially
loads), you can add it to the `run` function:

``` clojure
(defn ^:export run []
  (play! (sine 880) 1) ;; Add this line
  (loop! #'live-fn))
```

Now you'll need to refresh the page to hear the sound played again.

**Note:** `run` is only executed when the page is reloaded by the
second script tag in `play.html`.

## Step 3. Playing a series of notes

In order to play a sequence of notes, you'll first need to define an
"instrument" function that accepts notes as input. Add this code below
the ``;; Composition`` comment:

``` clojure
(defn ping [note]
  (sine (:pitch note)))
```

Each note will be a map (Clojure' equivalent of a dictionary/hash-map)
with a `:pitch` value (among others). This `ping` instrument will
simply play a sine wave at the pitch of the given note.

Next, you'll need to define a phrase of notes to play. Add this code
below the `ping` instrument definition:

``` clojure
(def twinkle
  (->> (phrase [1 1 1 1 1 1 2] ;; Note durations
               [0 0 4 4 5 5 4]) ;; Note intervals
       (all :instrument ping) ;; Specify the instrument to play the notes with.
       (tempo (bpm 80)) ;; Specify the tempo
       (where :pitch (comp C major)))) ;; Specify how to convert the intervals
                                       ;; to pitches.
```

The `twinkle` phrase is the first few notes from "Twinkle Twinkle
Little Star". The different aspects of the definition are explained
above. Note how the `:pitch` of each note will be determined by
mapping each interval to a different note in the (middle) C major
scale. For example, `0` will be the root note: "c", and `4` will be
the fifth interval "g".

To play this series of notes, we can use the `play-notes!` function:

``` clojure
(play-notes! twinkle)
```

## Step 4. Looping over a series of notes

Often, you'll want to continue to continually loop over a series of
notes, so that you can keep the music running while you make changes
to develop the piece (this is one of the core ideas behind
live-coding).

To loop twinkle forever, simply make the `live-fn` return the notes
specified in `twinkle`:

``` clojure
(defn live-fn [prev]
  twinkle)
```

The call in `run` to `loop!` will make set up `live-fn` to be
continually called to return the next series of notes to play. This
means you can keep tweaking your instruments and the phrase that is
returned by `live-fn`, and you'll hear your music change whenever you.

You'll notice when you save the composition file that it takes a short
time before your changes take effect. This is because Rhapsody
pre-schedules notes ahead of when they are played. This is to ensure
there is enough time to process the phrase definitions before the
sounds are scheduled to play.

## Up next

[Publishing your compositions](3-publishing.md)
