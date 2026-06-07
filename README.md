# E Street Shuffle Archive Site
See my blog for more details: https://lilbud.github.io/2026/05/30/shuffle-archive/

A reproduction of the E Street Shuffle site created using Hugo. This repository is the source code for the site, which can be found here: https://lilbud.github.io/shuffle/.

Everything needed to build a local copy of the site is included. All CSS/JS files are included. The only thing not included are the images, which are in the `shuffle-archive` repo. However, all image links lead to that repo anyway.

# Local Build Instructions
A guide to set up Hugo can be found on [Hugo's website](https://gohugo.io/getting-started/quick-start/).

Once Hugo is set up, then follow the below.

1. Clone this repository to your computer. Either using command line Git, or downloading a Zip and extracting it.
2. Navigate to the `shuffle` folder, open up the command line, and run `hugo server --config hugo_local.toml --cleanDestinationDir --disableFastRender --gc`. This will build the site using a custom config and run the build server. The site will then be accessible at localhost:1313 (or 127.0.0.1:1313) in your browser. As of now, the build server is required to use the site locally. It is possible to create an offline copy of the site, however there are many issues with that currently.

# Github Pages Instructions

This section will simply be links for anyone wishing to host a copy of the site on Github Pages. GH allows for free static site hosting for any user who wishes to do so. I don't know if anyone will ever care to do that or not, but this is here regardless.

I'll admit I haven't *fully* tested this, but the general idea should be as follows.

1. Fork this repository to your Github account
2. Under the "actions" tab, there should be a popup about enabling actions. Do so.
3. Back in the repo, update the README.md to some variation of the following:

```
This is a fork of Lilbud's "E Street Shuffle" archive site repository. The original can be found [here](https://github.com/lilbud/shuffle).
```

4. Upon saving the file, it should trigger the build and deploy of the site.
