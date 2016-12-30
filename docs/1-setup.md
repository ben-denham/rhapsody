# Environment setup

This tutorial will guide you through the process of setting up an
environment for developing with Rhapsody.

The tutorial provides instructions for running the Rhapsody tooling
directly on your machine, or through Docker containers (if you are
comfortable using Docker in your environment).

## Prerequisites

You will need to have completed the following tasks before

* [Git](https://git-scm.com/downloads)
  * If running on Windows, you should choose **Git Bash**
* [Create a GitHub Account](https://github.com/join) (optional)
  * You'll need this if you want to share your compositions through
    GitHub (highly recommended).
* A modern web browser
  * Preferably [Chrome](https://www.google.com/chrome/),
    [Firefox](https://www.mozilla.org/firefox/new/), or Chromium.

### Prerequisites without Docker

If you are not planning to use Docker, you will need the following
pieces of software installed on your machine:

* Java >= 8 ([OpenJDK](http://openjdk.java.net/install/) or
  [Java SE](http://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html))
  * You may already have Java installed without knowing it. Try
    running `java -version` in your terminal, and make sure it returns
    a version number >= 1.8.
* [Boot](http://boot-clj.com/)

### Prerequisites for Docker

If you are planning on using Docker, you will need Docker
installed. If you are running Docker inside *Docker Machine*, be aware
that you may need to refer use the IP address of the machine instead
of `localhost` when accessing URLs in your browser. You can determine
the IP address of your docker machine by running:

``` bash
docker-machine ip default
```

## Step 0. Forking Rhapsody on GitHub (Optional)

If you wish to store your own code on GitHub share your compositions
with others, then you should click the button that says **Fork** in
the top-right corner of this page on GitHub.

This will create a duplicate of the Rhapsody repository under your
GitHub account, which you will have full access to make changes to and
add your own compositions.

## Step 1. Cloning Rhapsody on your machine

Open the terminal on your machine, and run the following command:

``` bash
git clone https://github.com/ben-denham/rhapsody
```

**Note:** If you created your own fork of the repository in step 0,
then you should replace the URL in the command above with that of your
own repository: `https://github.com/<your-github-username>/rhapsody`.

This will clone the Rhapsody project into a `rhapsody` directory. You
will create all of your compositions inside this directory.

You can move the `rhapsody` directory to any location on your machine
that you wish.

## Step 2. Running the development environment

Move into the `rhapsody` directory in your terminal, and run the `boot
dev` task:

``` bash
cd rhapsody
boot dev
# Or, if you want to use Docker:
do/docker boot dev
```

This starts the Rhapsody development environment, which will run a
local server for your compositions and automatically update them as
you edit the source code (If you're familiar with Clojure dev
environments, this is a
[Immediate Feedback Development Environment](https://github.com/magomimmo/modern-cljs/blob/master/doc/second-edition/tutorial-02.md)).

You will need to have this task running whenever you wish to work on
your Rhapsody compositions. To stop the task, simply press `Ctrl-C` in
your terminal.

## Step 3. Viewing the demo

Once you have the `boot dev` task running, you can view the
compositions on your local server by opening `http://localhost:1812`
in your web browser.

Click on `demo` link, and enjoy the first composition running on your
machine :)

## Up Next

[Your first composition](2-tutorial.md)
