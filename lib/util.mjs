import { map, pipe, range } from './fp.mjs';
import { asciiToInt, intToAscii } from './string.mjs';

export const createAlphabetList = () =>
  pipe([range(0), map((n) => intToAscii(n + asciiToInt('a')))])(26);
