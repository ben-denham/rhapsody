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

* `index.html`
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
loads), you can add it to the `main!` function:

``` clojure
(defn main! []
  (play! (sine 880) 1) ;; Add this line
  (loop! #'live-fn))
```

Now you'll need to refresh the page to hear the sound played again.

**Note:** `main!` is only executed when the page is reloaded by the
special `defonce` line at the end of the composition, all code outside
of a `defonce` is re-executed whenever the the automatic-reload is
triggered by a file being saved.

## Step 3. Playing a series of notes



## Step 4. Looping over a series of notes

## Up next

[Publishing your compositions](3-publishing.md)
