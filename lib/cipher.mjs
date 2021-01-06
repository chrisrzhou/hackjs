import { joinWith, map, pipe, splitOn, toLower, toUpper } from './fp.mjs';
import { createAlphabetList } from './util.mjs';

export const caesarCipher = (shift) => {
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upper = toUpper(lower);
  const d = (char) => {
    const lowerChar = toLower(char);
    const isLower = lowerChar === char;
    const index = lower.indexOf(lowerChar);
    if (index < 0) {
      return char;
    }
    const alphabets = isLower ? lower : upper;
    return alphabets[(index + shift) % alphabets.length];
  };
  return pipe([splitOn(''), map(d), joinWith('')]);
};

export const substitutionCipher = (mapping) => {
  const defaultMapping = createAlphabetList().reduce((acc, c, i) => {
    acc[(i + 1).toString()] = c;
    return acc;
  }, {});
  const m = mapping || defaultMapping;
  const d = (char) => (m.hasOwnProperty(char) ? m[char] : char);
  return map(d);
};
