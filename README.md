# is-taken-cli [![NPM version](https://img.shields.io/npm/v/is-taken-cli.svg)](https://npmjs.com/package/is-taken-cli) [![NPM downloads](https://img.shields.io/npm/dm/is-taken-cli.svg)](https://npmjs.com/package/is-taken-cli) [![Build Status](https://img.shields.io/circleci/project/egoist/is-taken-cli/master.svg)](https://circleci.com/gh/egoist/is-taken-cli) 

> A simple cli program to check if an NPM package name is taken.

## Install

```
$ npm install --save is-taken-cli
```

## Usage

```js
const isTakenCli = require('is-taken-cli');

isTakenCli('unicorns');
//=> 'unicorns & rainbows'
```

## API

### isTakenCli(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.

## License

MIT © [EGOIST](https://github.com/egoist)
