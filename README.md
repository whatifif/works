# Works

This project is to demonstrate my works using Reactjs and Nodejs.
This requires MongoDB.

This is forked from 
[github.com/erikras/react-redux-universal-hot-example] (https://github.com/erikras/react-redux-universal-hot-example)

Refer to this site for document.

---

## Installation

```bash
npm install
```

## Running Dev Server with local MongoDB

```bash
npm run dev
```

## Running Dev Server with remote MongoDB

```bash
MONGO_URL=<your mongodb url> npm run dev
```

The first time it may take a little while to generate the first `webpack-assets.json` and complain with a few dozen `[webpack-isomorphic-tools] (waiting for the first Webpack build to finish)` printouts, but be patient. Give it 30 seconds.

## Building and Running Production Server with local MongoDB

```bash
npm run build
npm run start
```

## Building and Running Production Server with remote MongoDB

```bash
npm run build
MONGO_URL=<your mongodb url> npm run start
```

## Demo

A demonstration of this app can be seen [running on AWS](http://13.54.49.146/)


## Unit Tests

The project uses [Mocha](https://mochajs.org/) to run your unit tests, it uses [Karma](http://karma-runner.github.io/0.13/index.html) as the test runner, it enables the feature that you are able to render your tests to the browser (e.g: Firefox, Chrome etc.), which means you are able to use the [Test Utilities](http://facebook.github.io/react/docs/test-utils.html) from Facebook api like `renderIntoDocument()`.

To run the tests in the project, just simply run `npm test` if you have `Chrome` installed, it will be automatically launched as a test service for you.

To keep watching your test suites that you are working on, just set `singleRun: false` in the `karma.conf.js` file. Please be sure set it to `true` if you are running `npm test` on a continuous integration server (travis-ci, etc).


---

## Status of React Redux Universal Hot Example

[![build status](https://img.shields.io/travis/erikras/react-redux-universal-hot-example/master.svg?style=flat-square)](https://travis-ci.org/erikras/react-redux-universal-hot-example)
[![Dependency Status](https://david-dm.org/erikras/react-redux-universal-hot-example.svg?style=flat-square)](https://david-dm.org/erikras/react-redux-universal-hot-example)
[![devDependency Status](https://david-dm.org/erikras/react-redux-universal-hot-example/dev-status.svg?style=flat-square)](https://david-dm.org/erikras/react-redux-universal-hot-example#info=devDependencies)
[![react-redux-universal channel on discord](https://img.shields.io/badge/discord-react--redux--universal%40reactiflux-brightgreen.svg?style=flat-square)](https://discord.gg/0ZcbPKXt5bZZb1Ko)
[![Demo on Heroku](https://img.shields.io/badge/demo-heroku-brightgreen.svg?style=flat-square)](https://react-redux.herokuapp.com)
[![PayPal donate button](https://img.shields.io/badge/donate-paypal-brightgreen.svg?style=flat-square)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=E2LK57ZQ9YRMN)

