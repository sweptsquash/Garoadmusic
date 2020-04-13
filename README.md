# Garoadmusic
This website is built for the use of Michael Kelly, using react, react-redux, react-route and so on.

# Features

* react
* redux
* react-redux
* react-router
* redux-promise
* bootstrap
* reactstrap
* fontawesome
* eslint
* es6
* webpack

## Get Started

**Install**

- [NodeJS - Current](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable)

Navigate to the project folder using [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal-preview/9n0dx20hk701?activetab=pivot:overviewtab) or Powershell/Command Line.

Run the following command to install the required modules: `yarn`

The projects source files can be found under the folder labelled `src`

**Commands**

- `yarn build` Builds a production ready code
- `yarn dev` Builds a development version of the project, complete with soure maps.
- `yarn start` Run's a local development server with hot reload, will automatically open your default browser.

**Production Ready**

If you've modified the site's source code and want to deploy an update simply run the command `yarn build` this will output optimized assets into the `assets` folder and also update `index.html` with the new references. You'll thank want to upload both the contents of `assets` and `index.html` to your websites FTP.

**Project Configuration**

`src/Config.js` contains information related to social media links and projects, this is where you'll want to modify should you want to add to existing information. Note: this does require you to build the source code once a change has been made.