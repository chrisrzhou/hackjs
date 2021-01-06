import { curry2, pipe } from './fp.mjs';

export const toString = curry2((f, x) => x.toString(f));

export const asciiToInt = (a) => a.charCodeAt();

export const atob = (b) => Buffer.from(b, 'base64').toString();

export const btoa = pipe([Buffer.from, toString('base64')]);

export const intToAscii = String.fromCharCode;

export const recode = curry2((b1, b2) => pipe([stringToInt(b1), toString(b2)]));

export const stringToInt = curry2((radix, s) => Number.parseInt(s, radix));
