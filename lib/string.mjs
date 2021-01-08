import S from 'sanctuary';
import { ALPHABETS } from './constant.mjs';
import { curry2, curry3, map, matchAll, pipe, prop } from './fp.mjs';

export const {
  joinWith,
  lines,
  regex,
  splitOn,
  splitOnRegex,
  test,
  toLower,
  toUpper,
  trim,
  unlines,
  unwords,
  words,
} = S;

export const chunkString = (size) =>
  pipe([matchAll(regex('g')(`.{1,${size}}`)), map(prop('match'))]);

export const toString = curry2((f, x) => x.toString(f));

export const asciiToDec = (a) => a.charCodeAt();

export const atob = (b) => Buffer.from(b, 'base64').toString();

export const btoa = pipe([Buffer.from, toString('base64')]);

export const decToAscii = String.fromCharCode;

export const isLower = (x) => toLower(x) === x;

export const isUpper = (x) => toUpper(x) === x;

export const stringToInt = curry2((radix, s) => Number.parseInt(s, radix));

export const recode = curry2((b1, b2) => pipe([stringToInt(b1), toString(b2)]));

export const replace = curry3((p, r, s) => s.replace(p, r));

export const octToAscii = pipe([recode(8)(10), decToAscii]);

export const shiftAlphabet = curry2((shift, char) => {
  const lookupChar = toUpper(char);
  const index = ALPHABETS.indexOf(lookupChar);
  if (index < 0) {
    return char;
  }
  const shiftedChar = ALPHABETS[(index + shift) % ALPHABETS.length];
  return isUpper(char) ? shiftedChar : toLower(shiftedChar);
});
