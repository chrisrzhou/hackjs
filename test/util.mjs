import test from 'tape';

import { createAlphabetList, createMorseCodeMapping } from '../index.mjs';
import { ALPHABET_LIST, MORSE_CODE_MAPPING } from './snapshot.mjs';

test('createAlphabetList', (t) => {
  t.deepEqual(createAlphabetList(), ALPHABET_LIST);
  t.end();
});

test('createMorseCodeMapping', (t) => {
  t.deepEqual(createMorseCodeMapping(), MORSE_CODE_MAPPING);
  t.end();
});
