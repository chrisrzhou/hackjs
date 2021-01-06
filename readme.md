# hackjs

Functional programs for hacking in node.

---

## Use

Requires at least `v13` Node to be installed.

Import and alias to `h`

```js
import * as h from 'hackjs';

const flagRegexp = /ctf{.*}/;
const flag = h.pipeFile([
  h.toString('utf8'),
  h.lines,
  h.filter(h.test(flagRegexp)),
  h.head,
  h.match(flagRegexp),
  h.prop('match'),
])('./garden.jpg');
// 'ctf{1337}'
```

Or import specific named methods

```js
import { lines, pipe, toUppercase, tap } from 'hackjs';

// pipe programs!
pipe([
  lines,
  tap('after lines'), // 'tap' the pipe to print the state after an executed program
  toUppercase,
  tap('after uppercase'),
])('l1w1 l1w2 l1w3\nl2w1 l2w2 l2w3');
// ['L1W1 L1W2 L1W3', 'L2W1 L2W2 L2W3']
```

## CTFs

CTFs are solved using the `h` programs.

Solved CTFs are organized in the `ctf` folder and can be executed via `node`.

```bash
cd ctf/my-ctf
node index.mjs
```

## Test

Run tests with `npm test`.

## Related
- [CTF](https://en.wikipedia.org/wiki/Wargame_(hacking))
- [`sanctuary`](https://github.com/sanctuary-js/sanctuary)
- [`tape`](https://github.com/substack/tape)
