import solve from 'tape';

import * as h from '../../index.mjs';

const flag = (x) => `picoCTF{${x}}`;

const findFlagInFile = (path) => {
  const flagRegexp = /picoCTF{.*}/;
  return h.pipeFile([
    h.toString('utf8'),
    h.lines,
    h.filter(h.test(flagRegexp)),
    h.head,
    h.match(flagRegexp),
    h.prop('match'),
  ])(path);
};

solve('2Warm', (t) => {
  t.equal(flag(h.recode(10)(2)(42)), 'picoCTF{101010}');
  t.end();
});

solve('Glory of the Garden', (t) => {
  const f = findFlagInFile('./glory-of-the-garden.jpg');
  t.equal(f, 'picoCTF{more_than_m33ts_the_3y36BCA684D}');
  t.end();
});

solve('Insp3ct0r', (t) => {
  // https://2019shell1.picoctf.com/problem/61676/
  // inspect html, mycss.css, myjs.js for flags
  const p1 = 'picoCTF{tru3_d3';
  const p2 = 't3ct1ve_0r_ju5t';
  const p3 = '_lucky?1638dbe7}';
  const f = p1 + p2 + p3;
  t.equal(f, 'picoCTF{tru3_d3t3ct1ve_0r_ju5t_lucky?1638dbe7}');
  t.end();
});

solve('Lets Warm Up', (t) => {
  const n = h.recode(16)(10)('0x70');
  const ascii = h.intToAscii(n);
  t.equal(flag(ascii), 'picoCTF{p}');
  t.end();
});

solve('The Numbers', (t) => {
  const c = '16 9 3 15 3 20 6 { 20 8 5 14 21 13 2 5 18 19 13 1 19 15 14 }';
  const d = (x) => h.ALPHABETS[h.stringToInt(10)(x) - 1] || x;
  const p = h.pipe([h.splitOn(' '), h.map(d), h.joinWith('')])(c);
  t.equal(p, 'PICOCTF{THENUMBERSMASON}');
  t.end();
});

solve('Warmed Up', (t) => {
  t.equal(flag(h.recode(16)(10)('0x3D')), 'picoCTF{61}');
  t.end();
});

solve('handy-shellcode', (t) => {
  // run the following in terminal
  // (python -c "print '\x31\xc0\x50\x68\x2f\x2f\x73\x68\x68\x2f\x62\x69\x6e\x89\xe3\x89\xc1\x89\xc2\xb0\x0b\xcd\x80\x31\xc0\x40\xcd\x80'"; cat) | ./vuln
  const f = 'picoCTF{h4ndY_d4ndY_sh311c0d3_55c521fe}';
  t.equal(f, 'picoCTF{h4ndY_d4ndY_sh311c0d3_55c521fe}');
  t.end();
});

solve('practice-run-1', (t) => {
  // log into shell and folder and execute with './run_this'
  const f = 'picoCTF{g3t_r3adY_2_r3v3r53}';
  t.equal(f, 'picoCTF{g3t_r3adY_2_r3v3r53}');
  t.end();
});

solve('unzip', (t) => {
  // unzip with 'tar -xvzf flag.zip'
  const f = 'unz1pp1ng_1s_3a5y';
  t.equal(flag(f), 'picoCTF{unz1pp1ng_1s_3a5y}');
  t.end();
});

solve('vault-door-training', (t) => {
  // reverse engineer ./VaultDoorTraining.java
  const f = 'w4rm1ng_Up_w1tH_jAv4_e57d01a632a';
  t.equal(flag(f), 'picoCTF{w4rm1ng_Up_w1tH_jAv4_e57d01a632a}');
  t.end();
});

solve('13', (t) => {
  const c = 'cvpbPGS{abg_gbb_onq_bs_n_ceboyrz}';
  const rot13 = h.caesarCipher(13);
  const p = rot13(c);
  t.equal(p, 'picoCTF{not_too_bad_of_a_problem}');
  t.end();
});

solve('Bases', (t) => {
  t.equal(flag(h.atob('bDNhcm5fdGgzX3IwcDM1')), 'picoCTF{l3arn_th3_r0p35}');
  t.end();
});

solve('Easy1', (t) => {
  const c = 'UFJKXQZQUNB';
  const p = h.vigenereCipher('SOLVECRYPTO')(c);
  t.equal(flag(p), 'picoCTF{CRYPTOISFUN}');
  t.end();
});

solve('First Grep', (t) => {
  const f = findFlagInFile('./first-grep');
  t.equal(f, 'picoCTF{grep_is_good_to_find_things_4b2451ea}');
  t.end();
});

solve('OverFlow 0', (t) => {
  // visit shellserver and inspect code in vuln.c
  // provide an arg that is larger than 128bytes
  const f = 'picoCTF{3asY_P3a5y2f814ddc}';
  t.equal(f, 'picoCTF{3asY_P3a5y2f814ddc}');
  t.end();
});

solve('Resources', (t) => {
  // visit link: https://picoctf.org/resources
  // search for "picoCTF{"
  const f = 'picoCTF{r3source_pag3_f1ag}';
  t.equal(f, 'picoCTF{r3source_pag3_f1ag}');
  t.end();
});

solve('caesar', (t) => {
  const c = 'jyvzzpunaolybipjvunfzpthre';
  const d = (shift) => h.caesarCipher(shift)(c);
  const ps = h.range(0)(25).map(d);
  // determine plaintext candidate from ps
  const p = 'crossingtherubicongysimakx';
  t.ok(ps.includes(p));
  t.equal(flag(p), 'picoCTF{crossingtherubicongysimakx}');
  t.end();
});

solve('dont-use-client-side', (t) => {
  // reverse engineer `verify` method in <script /> tag
  // see modified script in ./dont-use-client-side.js
  const f = 'picoCTF{no_clients_plz_577431}';
  t.equal(f, 'picoCTF{no_clients_plz_577431}');
  t.end();
});

solve('logon', (t) => {
  // login to https://2019shell1.picoctf.com/problem/49907/
  // notice that the login POST request sets the cookie with "Admin=false"
  // Configure cURL for GET https://2019shell1.picoctf.com/problem/49907/flag to use "Admin=true" for the cookie value.
  // grab the flag
  const f = 'picoCTF{th3_c0nsp1r4cy_l1v3s_9e21365b}';
  t.equal(f, 'picoCTF{th3_c0nsp1r4cy_l1v3s_9e21365b}');
  t.end();
});

solve('strings it', (t) => {
  const f = findFlagInFile('./strings-it');
  t.equal(f, 'picoCTF{5tRIng5_1T_c7fff9e5}');
  t.end();
});

solve('vault-door-1', (t) => {
  // reverse engineer ./VaultDoor1.java
  const f = 'd35cr4mbl3_tH3_cH4r4cT3r5_51e7fd';
  t.equal(flag(f), 'picoCTF{d35cr4mbl3_tH3_cH4r4cT3r5_51e7fd}');
  t.end();
});

solve("what's a net cat?", (t) => {
  // connect with "nc 2019shell1.picoctf.com 4158"
  const f = 'picoCTF{nEtCat_Mast3ry_700da9c7}';
  t.equal(f, 'picoCTF{nEtCat_Mast3ry_700da9c7}');
  t.end();
});

solve('where are the robots', (t) => {
  // visit website: https://2019shell1.picoctf.com/problem/4159/
  // check https://2019shell1.picoctf.com/problem/4159/robots.txt
  // follow disallowed page to get flag: https://2019shell1.picoctf.com/problem/4159/a44f7.html
  const f = 'picoCTF{ca1cu1at1ng_Mach1n3s_a44f7}';
  t.equal(f, 'picoCTF{ca1cu1at1ng_Mach1n3s_a44f7}');
  t.end();
});

solve.skip('OverFlow 1', (t) => {
  t.end();
});

solve('So Meta', (t) => {
  const f = findFlagInFile('./so-meta.png');
  t.equal(f, 'picoCTF{s0_m3ta_505fdd8b}');
  t.end();
});

solve.skip('What Lies Within', (t) => {
  t.end();
});

solve('extensions', (t) => {
  // try to grep for the flag in the content
  const mime = h.pipeFile([h.toString('utf8'), h.lines, h.head])(
    './extensions.txt',
  );
  console.log(mime);
  // confirm the mime type and change the file extension to .png
  // grab the flag visually
  const f = 'picoCTF{now_you_know_about_extensions}';
  t.equal(f, 'picoCTF{now_you_know_about_extensions}');
  t.end();
});

solve.skip('shark on wire 1', (t) => {
  t.end();
});

solve('Based', (t) => {
  const serialize = (b) =>
    h.pipe([
      h.splitOn(' '),
      h.map(h.recode(b)(10)),
      h.map(h.intToAscii),
      h.joinWith(''),
    ]);

  const i1 = '01110100 01100101 01110011 01110100';
  const i2 = '154 141 155 160';
  const i3 = '63 6f 6d 70 75 74 65 72';

  const a1 = serialize(2)(i1);
  const a2 = serialize(8)(i2);
  const a3 = serialize(16)(i3);

  console.log(a1, a2, a3);

  // grab the flag
  const f = 'picoCTF{learning_about_converting_values_502ff297}';
  t.equal(f, 'picoCTF{learning_about_converting_values_502ff297}');
  t.end();
});

solve.skip('Client-side-again', (t) => {
  t.end();
});

solve('First Grep: Part II', (t) => {
  // grep on CLI with "grep -nr picoCTF{"
  const f = 'picoCTF{grep_r_to_find_this_5241c61f}';
  t.equal(f, 'picoCTF{grep_r_to_find_this_5241c61f}');
  t.end();
});

solve('Flags', (t) => {
  // use custom substitution cypher https://www.dcode.fr/maritime-signals-code
  const mapping = {
    f1: 'P',
    f2: 'I',
    f3: 'C',
    f4: 'O',
    f5: 'T',
    f6: 'F',
    f7: '1',
    f8: 'A',
    f9: 'G',
    f10: '5',
    f11: 'N',
    f12: 'D',
    f13: 'U',
  };
  // encode flags as a cipher using the default mapping and './flags.png';
  const c = [
    'f1',
    'f2',
    'f3',
    'f4',
    'f3',
    'f5',
    'f6',
    '{',
    'f6',
    'f7',
    'f8',
    'f9',
    'f10',
    'f8',
    'f11',
    'f12',
    'f10',
    'f5',
    'f13',
    'f6',
    'f6',
    '}',
  ];
  const p = h.pipe([h.substitutionCipher(mapping), h.joinWith('')])(c);
  t.equal(p, 'PICOCTF{F1AG5AND5TUFF}');
  t.end();
});

solve('Mr-Worldwide', (t) => {
  // track coordinates separated by '_'
  const coords1 = [
    [35.028309, 135.753082],
    [46.469391, 30.740883],
    [39.758949, -84.191605],
    [41.015137, 28.97953],
    [24.466667, 54.366669],
    [3.140853, 101.693207],
  ];
  const coords2 = [
    [9.005401, 38.763611],
    [-3.989038, -79.20356],
    [52.377956, 4.89707],
    [41.085651, -73.858467],
    [57.790001, -152.407227],
    [31.205753, 29.924526],
  ];
  console.log(coords1, coords2);
  // track cities
  const locations1 = [
    'Kyoto',
    'Odesa',
    'Dayton',
    'Istanbul',
    'Abu Dhabi',
    'Kuala Lumpur',
  ];
  const locations2 = [
    'Addis Ababa',
    'Loja',
    'Amsterdam',
    'Sleepy Hollow',
    'Kodiak',
    'Alexandria Governorate',
  ];
  // the flag seems to be the first letters of cities, which spells out KODIAK-ALASKA (which is also conveniently hidden in locations2)
  const getFirstChars = h.pipe([
    h.map(h.splitOn('')),
    h.map(h.head),
    h.joinWith(''),
  ]);
  const f = `${getFirstChars(locations1)}_${getFirstChars(locations2)}`;
  t.equal(flag(f), 'picoCTF{KODIAK_ALASKA}');
  t.end();
});

solve.skip('Open-to-admins', (t) => {
  t.end();
});

solve('Tapping', (t) => {
  const c =
    '.--. .. -.-. --- -.-. - ..-. { -- ----- .-. ... ...-- -.-. ----- -.. ...-- .---- ... ..-. ..- -. ...-- ....- ---.. ---.. ---.. --... .---- ----- ..... }';
  const p = h.pipe([
    h.splitOn(' '),
    h.substitutionCipher(h.MORSE_CODE_MAPPING),
    h.joinWith(''),
  ])(c);
  t.equal(p, 'PICOCTF{M0RS3C0D31SFUN348887105}');
  t.end();
});

solve.skip('la cifra de', (t) => {
  t.end();
});

solve('picobrowser', (t) => {
  // hit https://2019shell1.picoctf.com/problem/21851/flag
  // set the "User-Agent=picobrowser" and resend the GET request
  // grab the flag
  const f = 'picoCTF{p1c0_s3cr3t_ag3nt_3e1c0ea2}';
  t.equal(f, 'picoCTF{p1c0_s3cr3t_ag3nt_3e1c0ea2}');
  t.end();
});

solve('plumbing', (t) => {
  // pipe the stdout with "nc 2019shell1.picoctf.com 63345 | grep picoCTF{"
  const f = 'picoCTF{digital_plumb3r_4e7a5813}';
  t.equal(f, 'picoCTF{digital_plumb3r_4e7a5813}');
  t.end();
});

solve.skip('rsa-pop-quiz', (t) => {
  t.end();
});

solve.skip('vault-door-3', (t) => {
  t.end();
});

solve.skip('whats-the-difference', (t) => {
  t.end();
});

solve.skip('where-is-the-file', (t) => {
  t.end();
});

solve.skip('WhitePages', (t) => {
  t.end();
});

solve.skip('c0rrupt', (t) => {
  t.end();
});

solve.skip('like1000', (t) => {
  t.end();
});

solve.skip('m00nwalk', (t) => {
  t.end();
});

solve.skip('Irish-Name-Repo 1', (t) => {
  t.end();
});

solve.skip('waves over lambda', (t) => {
  t.end();
});

solve.skip('Irish-Name-Repo 2', (t) => {
  t.end();
});

solve.skip('Empire1', (t) => {
  t.end();
});

solve.skip('Irish-Name-Repo 3', (t) => {
  t.end();
});

solve.skip('JaWT Scratchpad', (t) => {
  t.end();
});

solve.skip('Java Script Kiddie', (t) => {
  t.end();
});

solve.skip('cereal hacker 1', (t) => {
  t.end();
});

solve.skip('Ghost_Diary', (t) => {
  t.end();
});
