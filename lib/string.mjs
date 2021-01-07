import S from 'sanctuary';
import { ALPHABETS } from './constant.mjs';
import { curry2, pipe } from './fp.mjs';

export const { toLower, toUpper } = S;

export const toString = curry2((f, x) => x.toString(f));

export const asciiToInt = (a) => a.charCodeAt();

export const atob = (b) => Buffer.from(b, 'base64').toString();

export const btoa = pipe([Buffer.from, toString('base64')]);

export const intToAscii = String.fromCharCode;

export const isLower = (x) => toLower(x) === x;

export const isUpper = (x) => toUpper(x) === x;

export const recode = curry2((b1, b2) => pipe([stringToInt(b1), toString(b2)]));

export const shiftAlphabet = curry2((shift, char) => {
  const lookupChar = toUpper(char);
  const index = ALPHABETS.indexOf(lookupChar);
  if (index < 0) {
    return char;
  }
  const shiftedChar = ALPHABETS[(index + shift) % ALPHABETS.length];
  return isUpper(char) ? shiftedChar : toLower(shiftedChar);
});

export const stringToInt = curry2((radix, s) => Number.parseInt(s, radix));
