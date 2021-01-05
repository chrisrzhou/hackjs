import test from 'tape';

import * as h from '../../index.mjs';

const flag = (x) => `picoCTF{${x}}`;

test('2Warm', (t) => {
  t.equal(flag(h.recode(10)(2)(42)), 'picoCTF{101010}');
  t.end();
});

test('Glory of the Garden', (t) => {
  const flagRegexp = /picoCTF{.*}/;
  const result = h.pipeFile([
    h.toString('utf8'),
    h.lines,
    h.filter(h.test(flagRegexp)),
    h.head,
    h.match(flagRegexp),
    h.prop('match'),
  ])('./garden.jpg');
  t.equal(result, 'picoCTF{more_than_m33ts_the_3y36BCA684D}');
  t.end();
});

test('Insp3ct0r', (t) => {
  // https://2019shell1.picoctf.com/problem/61676/
  // inspect html, mycss.css, myjs.js for flags
  const p1 = 'picoCTF{tru3_d3';
  const p2 = 't3ct1ve_0r_ju5t';
  const p3 = '_lucky?1638dbe7}';
  t.equal(p1 + p2 + p3, 'picoCTF{tru3_d3t3ct1ve_0r_ju5t_lucky?1638dbe7}');
  t.end();
});

test('Lets Warm Up', (t) => {
  const n = h.recode(16)(10)('0x70');
  const ascii = h.intToAscii(n);
  t.equal(flag(ascii), 'picoCTF{p}');
  t.end();
});

test('The Numbers', (t) => {
  const c = '16 9 3 15 3 20 6 { 20 8 5 14 21 13 2 5 18 19 13 1 19 15 14 }';
  const aCharCode = h.asciiToInt('a');
  const substitution = h
    .range(0)(26)
    .reduce((acc, n) => {
      acc[h.toString(10)(n + 1)] = h.intToAscii(n + aCharCode);
      return acc;
    }, {});
  const p = h.pipe([
    h.splitOn(' '),
    h.substitutionCipher(substitution),
    h.joinWith(''),
    h.toUpper,
  ])(c);
  t.equal(p, 'PICOCTF{THENUMBERSMASON}');
  t.end();
});

test.skip('Warmed Up', (t) => {
  t.end();
});

test.skip('handy-shellcode', (t) => {
  t.end();
});

test.skip('practice-run-1', (t) => {
  t.end();
});

test.skip('unzip', (t) => {
  t.end();
});

test.skip('vault-door-training', (t) => {
  t.end();
});

test.skip('13', (t) => {
  t.end();
});

test.skip('Bases', (t) => {
  t.end();
});

test.skip('Easy1', (t) => {
  t.end();
});

test.skip('First Grep', (t) => {
  t.end();
});

test.skip('OverFlow 0', (t) => {
  t.end();
});

test.skip('Resources', (t) => {
  t.end();
});

test.skip('caesar', (t) => {
  t.end();
});

test.skip('dont-use-client-side', (t) => {
  t.end();
});

test.skip('logon', (t) => {
  t.end();
});

test.skip('strings it', (t) => {
  t.end();
});

test.skip('vault-door-1', (t) => {
  t.end();
});

test.skip("what's a net cat?", (t) => {
  t.end();
});

test.skip('where are the robots', (t) => {
  t.end();
});

test.skip('So Meta', (t) => {
  t.end();
});

test.skip('What Lies Within', (t) => {
  t.end();
});

test.skip('extensions', (t) => {
  t.end();
});

test.skip('shark on wire 1', (t) => {
  t.end();
});

test.skip('Based', (t) => {
  t.end();
});

test.skip('Client-side-again', (t) => {
  t.end();
});

test.skip('First Grep: Part II', (t) => {
  t.end();
});

test.skip('Flags', (t) => {
  t.end();
});

test.skip('Mr-Worldwide', (t) => {
  t.end();
});

test.skip('Open-to-admins', (t) => {
  t.end();
});

test.skip('Tapping', (t) => {
  t.end();
});

test.skip('la cifra de', (t) => {
  t.end();
});

test.skip('picobrowser', (t) => {
  t.end();
});

test.skip('plumbing', (t) => {
  t.end();
});

test.skip('rsa-pop-quiz', (t) => {
  t.end();
});

test.skip('vault-door-3', (t) => {
  t.end();
});

test.skip('whats-the-difference', (t) => {
  t.end();
});

test.skip('where-is-the-file', (t) => {
  t.end();
});

test.skip('WhitePages', (t) => {
  t.end();
});

test.skip('c0rrupt', (t) => {
  t.end();
});

test.skip('like1000', (t) => {
  t.end();
});

test.skip('m00nwalk', (t) => {
  t.end();
});

test.skip('Irish-Name-Repo 1', (t) => {
  t.end();
});

test.skip('waves over lambda', (t) => {
  t.end();
});

test.skip('Irish-Name-Repo 2', (t) => {
  t.end();
});

test.skip('Empire1', (t) => {
  t.end();
});

test.skip('Irish-Name-Repo 3', (t) => {
  t.end();
});

test.skip('JaWT Scratchpad', (t) => {
  t.end();
});

test.skip('Java Script Kiddie', (t) => {
  t.end();
});

test.skip('cereal hacker 1', (t) => {
  t.end();
});

test.skip('Ghost_Diary', (t) => {
  t.end();
});
