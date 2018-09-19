# version-print
[![Build Status](https://travis-ci.org/elzup/version-print.svg?branch=master)](https://travis-ci.org/elzup/version-print)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> make software versions text for report


## Install

```
$ npm install version-print
```


## Usage

```js
const versionPrint = require('version-print');

versionPrint('unicorns');
//=> 'unicorns & rainbows'
```


## API

### `versionPrint(input, [options])`

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global version-print
```

```
$ version-print --help

  Usage
    version-print [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ version-print
    unicorns & rainbows
    $ version-print ponies
    ponies & rainbows
```

## License

MIT © [elzup](http://elzup.com)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/2284908?v=4" width="100px;"/><br /><sub><b>elzup</b></sub>](https://elzup.com)<br />[💻](https://github.com/elzup/generator-nm/commits?author=elzup "Code") [📖](https://github.com/elzup/generator-nm/commits?author=elzup "Documentation") [⚠️](https://github.com/elzup/generator-nm/commits?author=elzup "Tests") [🚇](#infra-elzup "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!