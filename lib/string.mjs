import { curry2, pipe } from './fp.mjs';

export const asciiToInt = (a) => a.charCodeAt();

export const intToAscii = String.fromCharCode;

export const recode = curry2((b1, b2) => pipe([stringToInt(b1), toString(b2)]));

export const stringToInt = curry2((radix, s) => Number.parseInt(s, radix));

export const toString = curry2((f, x) => x.toString(f));
