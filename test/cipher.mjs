import test from 'tape';

import { caesarCipher, substitutionCipher } from '../index.mjs';

test('caesarCipher', (t) => {
  t.equal(
    caesarCipher(0)('abcxyz'),
    'abcxyz',
    'should return ciphertext if shift is 0',
  );
  t.equal(
    caesarCipher(26)('abcxyz'),
    'abcxyz',
    'should return ciphertext if shift is 26',
  );

  const rot13 = caesarCipher(13);
  t.equal(rot13('abcxyz'), 'nopklm', 'should return shifted plaintext (rot13)');
  t.equal(
    rot13('abc _%_ XYZ'),
    'nop _%_ KLM',
    'should be case-sensitive and only apply on alphabets',
  );
  t.end();
});

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
