# E Street Shuffle Archive Site
See my blog for more details: https://lilbud.github.io/2026/05/30/shuffle-archive/

A reproduction of the E Street Shuffle site created using Hugo. This repository is the source code for the site, which can be found here: https://lilbud.github.io/shuffle/.

Everything needed to build a local copy of the site is included. All CSS/JS files are included. The only thing not included are the images, which are in the `shuffle-archive` repo.

# Build Instructions
A guide to set up Hugo can be found on [Hugo's website](https://gohugo.io/getting-started/quick-start/).

Once Hugo is set up, then follow the below.

1. Clone this repository to your computer. Either using command line Git, or downloading a Zip and extracting it.
2. Navigate to the `shuffle` folder, open up the command line, and run `hugo server --config hugo_local.toml --cleanDestinationDir --disableFastRender --gc`. This will build the site using a custom config and run the build server. The custom config is needed to ensure links are created correctly. The server MUST be running to access the local version of the site. I'm looking into configuring everything so that it can be run without the server.
