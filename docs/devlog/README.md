# Dev Log

Hey I don't make stuff like this very much, so let's try to learn a little
something more from this.

1. Get build environment set up.

    I'm on a new laptop, so I don't have any of the stuff I had previously. Let's
    see how the kids are doing it nowadays.

    Okay, having looked around, I'm just going to install Node.js. I downloaded the
    LTS version from [their site](https://nodejs.org/en) and installed it. I checked
    that box that said install Chocolatey and other tools; what could go wrong.

    So, the installer crapped out somewhere in the middle of a PowerShell script
    installing something. So I control-C it, let's see how things work.

1. Create the application

    Let's run this command from some random web site:

    ```bash
    npx create-react-app elementle
    ```

    Well, that didn't work, here's some errors:

    ```
    Installing template dependencies using npm...
    npm error code ERESOLVE
    npm error ERESOLVE unable to resolve dependency tree
    npm error
    npm error While resolving: elementle@0.1.0
    npm error Found: react@19.0.0
    npm error node_modules/react
    npm error   react@"^19.0.0" from the root project
    ```

    Oh, and it complained about NPM being out of date. Let's update that.

    ```bash
    npm install -g npm@11.1.0
    ```

    Nope, how about this random thing?

    ```bash
    npm install create-react-app
    ```

    Nope. So looks like `create-react-app` is deprecated. Let's try vite.

    [Reference](https://medium.com/@miahossain8888/how-to-create-a-react-app-with-vite-571883b100ef)

    ```bash
    npm create vite@latest
    npm install
    npm run dev
    ```

    So the last wasn't serving right because I have my source code symlinked
    between drives, which doesn't work. When I navigated to the real folder,
    it worked.

1. Implementation

    I started using [this course](https://react-v8.holt.courses/) as a reference,
    which I'm liking so far. I got to the point of setting up `useState`, when
    I hit an error that wasn't represented in that course. This was something I
    ran into last time about the different ways of representing components,
    either as a class / component or as something not a class / component.

    I guess I need to use a component. Moving things inside of `export default
    function` gets things working. Yay.

    Oh, they're called functional components. I should remember that.

    This ended up being a lot easier than last time. One thing I did this time
    was ask ChatGPT a number of questions, which gave better examples than I
    was finding in any documentation.

    I'm pretty happy with how this is working. There are a few things with the
    implementation to improve upon and obviously a lot of display stuff to make
    nicer, but Rowan thinks it's neat already.

1. Refinement

    There is a lot I just have no idea about, but brute forcing `flex`
    properties gets me there. I'm starting to feel pretty decent about this.

    Using ChatGPT for ideas and quick answers still feels wrong to me, but I
    don't know why. I wouldn't be solving it myself without it, I'd just be
    searching and hoping for documentation or a blog. Still though, weird.

    UI is hard. Trying to cleanly indicate before / after in both alphabet as
    well as element number is weird. In my mind, an up arrow could easily be
    interpreted as both "pick a higher number" as well as "it's higher up on
    the list", i.e. lower number. I think we'll have to end up with text to make
    it clear.

1. Release

    Okay, there is clearly a lot to get done with this, but I want to get it out
    there, both for my sake and because my son really wants to be able to play
    it on his own, in spite of the awkwardness of it.

    So here we go.
