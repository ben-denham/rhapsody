# Publishing your compositions

In order to publish your compositions to GitHub, you'll need to have
cloned your local copy of the repository from your own fork of
Rhapsody. See (Environment setup)[1-setup.md] for more details.

**Note:** You may wish to remove the `compositions/demo` directory
before publishing your own compositions.

## Pushing your code to GitHub

If you're not familiar with Git, then the easiest way to push all of
your code changes to GitHub is to run the following commands from the
command line while in the `rhapsody` directory:

``` bash
git add --all
git commit -m "Work on my compositions"
git push
```

## Building the composition webpages

To build the publishable composition webpages that you can share with
others, you can run the `boot release` task:

``` bash
boot release
# Or, if you're using Docker
do/docker boot release
```

The webpages are placed in the `release-www` directory, so you could
deploy them to your own webserver, or to GitHub Pages, as described
below.

## Publishing your compositions to GitHub pages

GitHub provides a free webhosting service called
[GitHub Pages](https://pages.github.com/) that you can use to host
your compositions for others to listen to.

To do so, simply make sure the publishable webpages are up to date,
and run `do/deploy`:

``` bash
boot release
do/deploy
```

After doing that, your compositions will be available at the following URL:

```
https://<your-github-username>.github.io/rhapsody
```

For example:
[https://ben-denham.github.io/rhapsody](https://ben-denham.github.io/rhapsody)

## Up next

[Creating instruments](4-instruments.md)
