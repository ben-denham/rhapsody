# Performance considerations

Performance considerations in this context refers to reducing system
load to ensure clean playback of sounds.

## Possible issues

Some issues you may notice if performance is an issue:

* Sound crackling
* Skipped notes

More testing is required to fully understand the causes of these
issues.

## Disabling auto-rebuilding

A common issue you may notice is a large amount of crackling each time
you save a file while working on a composition. This can be caused by
the extra system resources being consumed by a full re-compilation of
the ClojureScript files.

One way to avoid this is to disable auto-rebuilding, and instead
re-evaluate sections of your ClojureScript files as you change
them. This technique can also provide you with finer control over
execution of code while live-coding.

### Step 1. Run `boot dev` without auto-rebuilding

Use the `-r` option to disable the auto-rebuilding of `boot dev`:

``` bash
boot dev -r
# Or, if you're using Docker:
do/docker boot dev -r
```

### Step 2. Connect your editor to the REPL

You'll need a text editor that supports connecting a ClojureScript
REPL. Refer to the current list of
[editors with support](https://github.com/clojure/clojurescript/wiki#editors).

Using Emacs with [Cider](https://cider.readthedocs.io/en/latest/) as
an example, you will connect your editor to the REPL started by `boot
dev`:

1. Open your `composition.cljs` file in Emacs.
2. Run the Emacs command: `M-x cider-connect`
   * (M-x stands for the combination of the 'Alt' and 'x' keys)
3. Select the localhost Rhapsody REPL port
4. A new buffer should open with a REPL prompt

If you see warnings in the Cider REPL about `nrepl` or `cider-repl`
versions, you may need to add the following in a
`~/.boot/profile.boot` file:

``` clojure
(require 'boot.repl)

(swap! boot.repl/*default-dependencies*
       concat '[[cider/cider-nrepl "REPLACE_WITH_YOUR_CIDER_VERSION"]])

(swap! boot.repl/*default-middleware*
       conj 'cider.nrepl/cider-middleware)
```

### Step 4. Initialise a ClojureScript browser REPL

At the REPL you've opened in your editor, run the following Clojure
command:

``` clojure
(start-repl)
```

This will wait for a browser window running your composition to
connect to. Open up your composition in a web browser, and
`(start-repl)` should connect successfully. If you already had your
composition open, you may need to hard-refresh it (Ctrl-F5).

You should then have a new ClojureScript browser REPL in your
editor. ClojureScript entered into this REPL will be evaluated in the
browser. For example, try executing the following to see an alert box
in the browser:

``` clojure
(js/alert "Hello World!")
```

### Step 3. Re-evaluate ClojureScript forms

Now you should be able to send individual "forms" (self-contained
sections of ClojureScript code that have an equal number of opening
and closing parentheses) to the REPL to be exeucted in the browser.

For example, in Emacs, if you place your cursor after a function
definition and execute `C-x C-e` (`Ctrl+x Ctrl+e`), the function will
be redefined in the browser, and all code calling that function will
use the new definition.

In this way, you can edit functions and variable defintions, and
immediately send them to the browser for re-evaluation without the
overhead of a full re-compilation.

## Up next

[Additional resources](8-resources.md)
