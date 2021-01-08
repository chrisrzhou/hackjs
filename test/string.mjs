import test from 'tape';

import {
  asciiToDec,
  atob,
  btoa,
  chunkString,
  decToAscii,
  isLower,
  isUpper,
  octToAscii,
  recode,
  shiftAlphabet,
  stringToInt,
  toString,
} from '../index.mjs';

test('asciiToDec', (t) => {
  t.test('should convert from ascii', (t) => {
    t.equal(asciiToDec('p'), 112);
    t.equal(asciiToDec('~'), 126);
    t.equal(asciiToDec('½'), 189);
    t.end();
  });
  t.end();
});

test('atob', (t) => {
  const a = 'bDNhcm5fdGgzX3IwcDM1';
  const b = 'l3arn_th3_r0p35';
  t.equal(atob(a), b);
  t.equal(btoa(atob(a)), a);
  t.end();
});

test('btoa', (t) => {
  const a = 'bDNhcm5fdGgzX3IwcDM1';
  const b = 'l3arn_th3_r0p35';
  t.equal(btoa(b), a);
  t.equal(atob(btoa(b)), b);
  t.end();
});

test('chunkString', (t) => {
  t.throws(() => chunkString(0)('abcdefg'));
  t.deepEqual(
    chunkString(1)('abcdefg'),
    ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    'should chunk with size = 1',
  );
  t.deepEqual(
    chunkString(2)('abcdefg'),
    ['ab', 'cd', 'ef', 'g'],
    'should chunk with size = 2',
  );
  t.deepEqual(
    chunkString(3)('abcdefg'),
    ['abc', 'def', 'g'],
    'should chunk with size = 3',
  );
  t.deepEqual(
    chunkString(8)('0010100111000101'),
    ['00101001', '11000101'],
    'should chunk "bits"',
  );
  t.end();
});

test('decToAscii', (t) => {
  t.test('should convert to ascii', (t) => {
    t.equal(decToAscii(112), 'p');
    t.equal(decToAscii(126), '~');
    t.equal(decToAscii(189), '½');
    t.end();
  });
  t.end();
});

test('isLower', (t) => {
  t.ok(isLower('-'));
  t.ok(isLower('a'));
  t.notOk(isLower('A'));
  t.end();
});

test('isUpper', (t) => {
  t.ok(isUpper('-'));
  t.ok(isUpper('A'));
  t.notOk(isUpper('a'));
  t.end();
});

test('octToAscii', (t) => {
  t.equal(octToAscii(160), 'p');
  t.end();
});

test('recode', (t) => {
  t.equal(recode(10)(10)(4242), '4242', 'should stringify');
  t.equal(
    recode(16)(10)('0x70'),
    '112',
    'should convert from hexadecimal (16) to decimal (10)',
  );
  t.equal(
    recode(16)(8)('0x70'),
    '160',
    'should convert from hexadecimal (16) to octal (8)',
  );
  t.equal(
    recode(10)(8)('4242'),
    '10222',
    'should convert from decimal (10) to octal (8)',
  );
  t.equal(
    recode(10)(2)('4242'),
    '1000010010010',
    'should convert from decimal (10) to binary (2)',
  );
  t.end();
});

test('shiftAlphabet', (t) => {
  t.equal(shiftAlphabet(2)('-'), '-', 'should not shift non-alphabets');
  t.equal(shiftAlphabet(0)('y'), 'y', 'should not shift');
  t.equal(shiftAlphabet(26)('y'), 'y', 'should not shift');
  t.equal(shiftAlphabet(2)('y'), 'a', 'should shift by +2');
  t.equal(shiftAlphabet(-2)('y'), 'w', 'should shift by -2');
  t.equal(shiftAlphabet(2)('Y'), 'A', 'should be case-sensistive');
  t.end();
});

test('stringToInt', (t) => {
  t.equal(stringToInt(10)('42'), 42, 'should convert int string to int');
  t.equal(
    stringToInt(16)('42'),
    66,
    'should convert int string for specified radix',
  );
  t.equal(stringToInt(10)('42.6'), 42, 'should convert float string to int');
  t.equal(
    stringToInt(10)('not a number'),
    Number.NaN,
    'should not convert non-numbers',
  );
  t.end();
});

test('toString', (t) => {
  t.equal(toString(10)(42), '42', 'stringify integer');
  t.equal(toString(2)(42), '101010', 'integer to binary');
  t.equal(
    toString('utf8')(Buffer.from('This is a buffer')),
    'This is a buffer',
    'stringify buffer',
  );
  t.end();
});
