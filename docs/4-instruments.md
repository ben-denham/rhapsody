# Creating instruments

Creating an instrument involves defining a function that accepts a
note as a parameter, and returns a connected graph of synthesizer
"nodes" (often strung together by the `connect->` construct) that will
play a sound based on the information contained within the note.

Each note is a map (Clojure's equivalent of a dictionary or hash-map)
which contains information about the note to be played. Most
importantly, the note will contain a `:pitch`, but you can also
include any other information you like when composing notes.

An example of how most instruments will be structured:

``` clojure
(defn my-instrument [note]
    (connect->
        ...
        synth nodes
        ...))
```

The various types of sound nodes are described below.

## Sound sources

Sound source nodes are generally the first node in an instrument, as
they create the base sound signal that will be modified by other
nodes.

The most common sound sources are oscillators, which generate uniform
sound waves at a given frequency (or pitch):

``` clojure
(sine pitch)
(sawtooth pitch)
(square pitch)
(triangle pitch)
```

## Envelopes

An envelope node is used to control the volume of a sound over time.

For example, a percussive envelope can be used to control how quickly
the sound reaches its maximum volume, and how quickly it decays:

``` clojure
(defn my-instrument [note]
    (connect->
        (sine (:pitch note))
        (percussive 0.02 2))) ;; Increase in volume quickly (0.02),
                              ;; but decay slowly (2).
```

An
[ADSR envelope](https://en.wikipedia.org/wiki/Synthesizer#Attack_Decay_Sustain_Release_.28ADSR.29_envelope)
can give more control over how long the sound lasts at its maximum
volume:

``` clojure
(adsr attack decay sustain release)
```

## Modifiers

Modifiers are used to make further modifications to sounds.

For example the `low-pass` and `high-pass` filter nodes filter out
high and low frequencies respectively from a given sound:

``` clojure
(low-pass cutoff-frequency)
(high-pass cutoff-frequency)
```

The gain node can be used to increase or decrease the volume of a
sound:

``` clojure
(gain 0.1) ;; Make it quieter
(gain 2) ;; Make it louder
```

For example, here is an instrument that is based on a buzzy `sawtooth`
sound. The `low-pass` filter cuts off frequencies higher than three
times the base pitch of the sound to make it less buzzy. The `gain`
node then makes the sound quieter:

``` clojure
(defn my-instrument [note]
  (connect->
    (sawtooth (:pitch note))
    (low-pass (* 3 (:pitch note)))
    (gain 0.3)))
```

## Combinators

Combinator nodes are used to combine synth nodes together.

`connect->` is an example of a combinator that joins synth nodes
together in a chain.

`add` can be used to add two sound signals together. This is useful to
create a sound from multiple sound sources:

``` clojure
;; Create a sound from two sine waves; one at the given pitch, the
;; other at twice the given pitch:
(add
    (sine pitch)
    (sine (* pitch 2))
```

## Learning more

To learn more about the synthesizer nodes available to you, refer to
the documentation for the
[cljs-bach](https://github.com/ctford/cljs-bach) library, which is
used by Rhapsody.

## Up next

[Composing musical phrases](5-composing.md)
