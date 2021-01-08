import S from 'sanctuary';

export const {
  I,
  K,
  chain,
  curry2,
  curry3,
  elem,
  equals,
  filter,
  ifElse,
  join,
  map,
  pipe,
  prop,
  props,
  range,
  reduce,
  sum,
  sort,
  show,
} = S;

const justValue = prop('value');

export const pairs = S.zipWith((a) => (b) => [a, b]);

export const propOrKey = curry2((o, k) => (o.hasOwnProperty(k) ? o[k] : k));

export const head = pipe([S.head, justValue]);

export const last = pipe([S.last, justValue]);

export const match = (regexp) => {
  const serialize = (maybeMatch) => {
    if (S.isNothing(maybeMatch)) {
      return null;
    }
    const { groups, match } = justValue(maybeMatch);
    return {
      groups: S.justs(groups),
      match,
    };
  };
  return pipe([S.match(regexp), serialize]);
};

export const matchAll = (regexp) => {
  const serialize = (m) => {
    const { groups, match } = m;
    return {
      groups: S.justs(groups),
      match,
    };
  };
  return pipe([S.matchAll(regexp), map(serialize)]);
};

export const take = pipe([S.take, map(justValue)]);

export const tap = curry2((message, x) => {
  console.log(`${message}\n${show(x)}`);
  return x;
});
