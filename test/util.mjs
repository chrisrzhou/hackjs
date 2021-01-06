import test from 'tape';

import { createAlphabetList } from '../index.mjs';

test('createAlphabetList', (t) => {
  t.deepEqual(createAlphabetList(), [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]);
  t.end();
});
