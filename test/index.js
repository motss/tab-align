/** Import project dependencies */
const test = require('ava');

const tabAlign = require('../dist').default;

const str = [
  'testing long title and have to be really really long',
  'this is a short title',
  'short title',
  'something mediocre',
  'it\'s mundane',
];

test('throws when no arguments', async (t) => {
  try {
    await tabAlign();
    t.fail();
  } catch (e) {
    t.is(e.message, 'texts must be defined with values');
  }
});

test('runs with proper string array', async (t) => {
  try {
    const alignText = tabAlign(str);

    t.is(alignText('title'), `title${' '.repeat(str[0].length - 5)}`);
  } catch (e) {
    t.fail();
  }
});

test('align to end', async (t) => {
  try {
    const alignText = tabAlign(str, 'end');

    t.is(alignText('title'), `${' '.repeat(str[0].length - 5)}title`);
  } catch (e) {
    t.fail();
  }
});

test('align center', async (t) => {
  try {
    const alignText = tabAlign(str, 'center');
    const totalPadding = str[0].length - 5;
    const firstPadding = Math.floor(totalPadding / 2);

    t.is(alignText('title'), `${
      ' '.repeat(firstPadding)
    }title${
      ' '.repeat(totalPadding - firstPadding)
    }`);
  } catch (e) {
    t.fail();
  }
});

test('align to start with whitespaces', async (t) => {
  try {
    const ws = 4;
    const alignText = tabAlign(str, null, ws);

    t.is(alignText('title'), `title${' '.repeat(str[0].length - 5 + ws)}`);
  } catch (e) {
    t.fail();
  }
});

test('fill whitespaces with other symbols', async (t) => {
  try {
    const ws = 4;
    const fillWith = '+';
    const alignText = tabAlign(str, null, ws, fillWith);

    t.is(alignText('title'), `title${fillWith.repeat(str[0].length - 5 + ws)}`);
  } catch (e) {
    t.fail();
  }
});
