import test from 'tape';

import { asciiToInt, intToAscii, recode, toString } from '../index.mjs';

test('asciiToInt', (t) => {
  t.test('should convert from ascii', (t) => {
    t.equal(asciiToInt('p'), 112);
    t.equal(asciiToInt('~'), 126);
    t.equal(asciiToInt('½'), 189);
    t.end();
  });
  t.end();
});

test('intToAscii', (t) => {
  t.test('should convert to ascii', (t) => {
    t.equal(intToAscii(112), 'p');
    t.equal(intToAscii(126), '~');
    t.equal(intToAscii(189), '½');
    t.end();
  });
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
