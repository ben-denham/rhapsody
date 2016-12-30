# Rhapsody

> noun. A free instrumental composition in one extended movement,
> typically one that is emotional in character -
> *[OED](https://en.oxforddictionaries.com/definition/rhapsody)*

## Overview

Rhapsody is a platform for programmatic, web-based musical
creations. You write [ClojureScript](https://clojurescript.org/) code
that utilises the
[WebAudio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
to generate music through the browser.

Here are some examples of what you can achieve with Rhapsody:
[https://ben-denham.github.io/rhapsody/](https://ben-denham.github.io/rhapsody/)

Since each composition is contained within a webpage, you can add any
kind of visualisation or interactivity to the page that you like!

You can publish your compositions through
[GitHub Pages](https://pages.github.com/) (or on any other website)
for others to listen to. If your code uses random or dynamic sources
to generate music, then it may never even be played the same way
twice!

Alternatively, you can use Rhapsody as an environment for
[live-coding](https://en.wikipedia.org/wiki/Live_coding).

By sharing the source-code of your compositions on GitHub, other
musicians will be able to learn from how your music works, and use it
to influence their own creations!

## Documentation

1. [Environment setup](docs/1-setup.md)
2. [Your first composition](docs/2-tutorial.md)
3. [Publishing your compositions](docs/3-publishing.md)
4. [Creating instruments](docs/4-instruments.md)
5. [Composing musical phrases](docs/5-composing.md)
6. [Visuals and interactivity](docs/6-visuals-interactivity.md)
7. [Performance considerations](docs/7-performance.md)

## Contributing

Contributions to Rhapsody are very welcome, whether it's a new
function to help with music generation, an improvement to the
structure of the project, or an example of some cool technique to add
to the documentation.

It might make sense for some contributions to be added to the projects
that Rhapsody uses, but they can still be added to Rhapsody itself
until they are accepted upstream.

Please
[make a pull request](https://help.github.com/articles/creating-a-pull-request)
for code or documentation you would like to add to the project, or
[create an issue](https://github.com/ben-denham/rhapsody/issues/new)
if you experience a problem or would like to request a feature.

## Other projects

If you're interested in programmatic music generation, then you should
check out these other projects (which are either used by or in some
way influenced Rhapsody):

* [Klangmeister](https://github.com/ctford/klangmeister)
* [Overtone](http://overtone.github.io/)
* [Leipzig](https://github.com/ctford/leipzig)
* [cljs-bach](https://github.com/ctford/cljs-bach)
