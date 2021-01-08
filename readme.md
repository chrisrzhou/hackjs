# hackjs

Functional programs for hacking in node.

---

## Intro

Programs and solvers are written by the author to practice writing FP programs for hacking and solving CTFs ⛳️.

Programs are usually curried, which allows for composition and reuse, as shown in the examples below.

## Use

Requires at least `v13` Node to be installed.

Import and alias to `h`

```js
import * as h from 'hackjs';

// pipe files
const flagRegexp = /flag{.*}/;
h.pipeFile([
  h.toString('utf8'),
  h.lines,
  h.filter(h.test(flagRegexp)),
  h.head,
  h.match(flagRegexp),
  h.prop('match'),
])('./leet.jpg'); // 'flag{1337}'

// modular ciphers
const rot13 = h.caesarCipher(13);
rot13('synt{1337}'); // 'FLAG{1337}'

h.substitutionCipher(h.MORSE_CODE_MAPPING)('..-. .-.. .- --. { .---- ...-- ...-- --... }'); // 'flag{1337}'

// string conversions by recoding bases
const decToBinary = recode(16)(2);
recode(16)(10)('a'); // hexadecimal to decimal (10)
recode(16)(8)('a'); // hexadecimal to octal (12)
recode(8)(16)(12); // octal to hex ('a')
decToBinary('a'); // hexadecimal to binary ('1010)
```

Or import specific named methods

```js
import { lines, map, pipe, toUpper, tap } from 'hackjs';

pipe([
  lines,
  tap('after lines'), // 'tap' the pipe to print the state after an executed program
  map(toUpper),
  tap('after uppercase'),
])('l1w1 l1w2 l1w3\nl2w1 l2w2 l2w3'); // ['L1W1 L1W2 L1W3', 'L2W1 L2W2 L2W3']
```

## CTFs

CTFs are solved using `h` programs.

Solved CTFs are organized in the [`ctf`](./ctf) folder and can be executed via `node`.

```bash
cd ctf/my-ctf
node index.mjs
```

## Test

Run tests with `npm test`.

## TODOs
- Expand `file` programs.
- Implement a [steganography decoder](https://stylesuxx.github.io/steganography/)
- Implement a [Vigenere autosolver](https://www.guballa.de/vigenere-solver)

## Resources
- [CTF](https://en.wikipedia.org/wiki/Wargame_(hacking))
- [`sanctuary`](https://github.com/sanctuary-js/sanctuary)
- [`tape`](https://github.com/substack/tape)
