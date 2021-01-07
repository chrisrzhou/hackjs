import { ALPHABETS } from './constant.mjs';
import {
  curry2,
  joinWith,
  map,
  pairs,
  pipe,
  propOrKey,
  splitOn,
} from './fp.mjs';
import { isUpper, shiftAlphabet, toUpper } from './string.mjs';

export const caesarCipher = curry2((shift, c) =>
  pipe([splitOn(''), map(shiftAlphabet(shift)), joinWith('')])(c),
);

export const substitutionCipher = curry2((mapping, c) =>
  map(propOrKey(mapping))(c),
);

export const vigenereCipher = curry2((k, c) => {
  const karray = splitOn('')(k);
  const carray = splitOn('')(c);
  const ps = pairs(karray)(carray);
  const n = ALPHABETS.length;
  const d = (pair) => {
    const [c1, c2] = pair;
    const i1 = ALPHABETS.indexOf(toUpper(c1));
    const i2 = ALPHABETS.indexOf(toUpper(c2));
    const shift = (n + i2 - i1) % n;
    const baseChar = isUpper(c2) ? 'A' : 'a';
    return shiftAlphabet(shift)(baseChar);
  };
  const p = pipe([map(d), joinWith('')])(ps);
  return p;
});
