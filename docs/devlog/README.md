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
    npm init
    npm run dev
    ```

    So the last wasn't serving right because I have my source code symlinked
    between drives, which doesn't work. When I navigated to the real folder,
    it worked.
