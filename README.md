<div align="center" style="text-align: center;">
  <h1 style="border-bottom: none;">tab-align</h1>

  <p>Align text with whitespaces + position</p>
</div>

<hr />

[![Build Status][travis-badge]][travis-url]
[![Version][version-badge]][version-url]
[![Downloads][downloads-badge]][downloads-url]
[![MIT License][mit-license-badge]][mit-license-url]
[![Dependency Status][daviddm-badge]][daviddm-url]
[![NSP Status][nsp-badge]][nsp-url]

[![Code of Conduct][coc-badge]][coc-url]

> This package helps aligning rows of texts with ease. Texts can be aligned according to your preferences such as the position of the text, how many whitespaces between columns, replacing whitespaces with other symbols, et al.

## Pre-requisite

- [Node.js][node-js-url] >= 8.6.0
- [NPM][npm-url] >= 5.3.0 ([NPM][npm-url] comes [Node.js][node-js-url] so there is no need to install separately.)

## How to use

## Install

```bash
# Install package with NPM
$ npm install --save tab-align
```

## How to use

The following is a simple code snippet:

```js
/** Import the package */
const tabAlign = require('tab-align');

/** Setting up with the position and whitespaces for alignment */
const pos = 'end';
const whitespaces = 4;
const allPossibleTitles = [
  'really really long title',
  'random title',
  'short title',
  'how\'s your day',
];
const fillWith = '.';
const alignText = tabAlign(allPossibleTitles, pos, whitespaces, fillWith);

console.log(alignText('Today\'s title'));
// This logs `........................Today's title`
```

## tabAlign(stringArrays, [alignTo, whitespaces, fillWith])

- `stringArrays` <[string][string-mdn-url][]> An array of strings to determine the length of the longest title.
- `alignTo` <[string][string-mdn-url]> Position to align text to. Possible values: `start`, `center`, or `end`.
- `whitespaces` <[number][number-mdn-url]> Number of whitespaces to fill in.
- `fillWith` <[string][string-mdn-url]> Symbol to replace whitespaces during the filling in.
- returns <[Function][function-mdn-url]>
  - `text` <[string][string-mdn-url]> Text for alignment.

## License

[MIT License](http://motss.mit-license.org/) © Rong Sen Ng

[node-js-url]: https://nodejs.org
[npm-url]: https://www.npmjs.com
[string-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[number-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[function-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function

[travis-badge]: https://img.shields.io/travis/rust-lang/rust.svg?style=flat-square
[version-badge]: https://img.shields.io/npm/v/tab-align.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dm/tab-align.svg?style=flat-square
[mit-license-badge]: https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square
[nsp-badge]: https://nodesecurity.io/orgs/motss/projects/92a9a3b3-c0c8-4172-917d-f1c7e0d5ef9f/badge
[daviddm-badge]: https://img.shields.io/david/expressjs/express.svg?style=flat-square
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square

[travis-url]: https://travis-ci.org/motss/tab-align
[version-url]: https://www.npmjs.com/package/tab-align
[downloads-url]: http://www.npmtrends.com/tab-align
[mit-license-url]: https://github.com/motss/tab-align/blob/master/LICENSE
[daviddm-url]: https://david-dm.org/motss/tab-align
[nsp-url]: https://nodesecurity.io/orgs/motss/projects/06f08484-528d-44c7-8280-053df7a2367d
[coc-url]: https://github.com/motss/tab-align/blob/master/CODE_OF_CONDUCT.md
