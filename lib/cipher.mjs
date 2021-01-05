import { curry2, map } from './fp.mjs';

export const substitutionCipher = curry2((substitution, c) => {
  const substitute = (x) =>
    substitution.hasOwnProperty(x) ? substitution[x] : x;
  return map(substitute)(c);
});
