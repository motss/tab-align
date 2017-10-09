# tab-align

[![Greenkeeper badge](https://badges.greenkeeper.io/motss/tab-align.svg)](https://greenkeeper.io/)

> Align text with whitespaces

Align text with whitespaces + position.

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

[MIT License][mit-license-url] © Rong Sen Ng

[mit-license-url]: http://motss.mit-license.org/

[string-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[number-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[function-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
