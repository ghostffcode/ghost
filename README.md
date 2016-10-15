# ghost
---
[![CircleCI](https://circleci.com/gh/ghostffcode/ghost.svg?style=svg)](https://circleci.com/gh/ghostffcode/ghost) [![Code Climate](https://codeclimate.com/github/ghostffcode/ghost/badges/gpa.svg)](https://codeclimate.com/github/ghostffcode/ghost) [![Coverage Status](https://coveralls.io/repos/github/ghostffcode/ghost/badge.svg?branch=master)](https://coveralls.io/github/ghostffcode/ghost?branch=master)

Boilerplate for building Javascript Library using webpack.

---
## To use:
Clone this repository, change values in `.env` file according to your need.

- TARGET: Change to `umd` if you want your library to be imported as a node module and also be used in the browser or leave as `browser` if you only want it to be used in the browser.
- NAME: The name of the library, webpack uses this as a wrapper for our library.

### Install dependencies:
Using npm:
```bash
$ npm install
```

Or with yarn:
```bash
$ yarn
```

### Build with webpack
Run:
```bash
$ npm run build
```
creates source file and also creates both minified and non-minified version

### In Browser sample
Run:
```bash
$ npm run dev
```
Starts up webpack-dev-server on `http://localhost:8080`

## Testing
Run:
```bash
$ npm t
```

## Want To Contribute?
Fork this repo, make changes, test and send a pull request.
