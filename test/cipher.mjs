import test from 'tape';

import { substitutionCipher } from '../index.mjs';

test('substitutionCipher', (t) => {
  t.deepEqual(
    substitutionCipher({})(['3', '1', '{', '5', '}']),
    ['3', '1', '{', '5', '}'],
    'should return ciphertext if no substitution is provided',
  );
  t.deepEqual(
    substitutionCipher({
      3: 'c',
      1: 'a',
      5: 'xyz',
    })(['3', '1', '{', '5', '}']),
    ['c', 'a', '{', 'xyz', '}'],
    'should substitute matching characters is provided',
  );
  t.end();
});
