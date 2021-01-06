import S from 'sanctuary';

export const {
  I,
  K,
  chain,
  curry2,
  curry3,
  filter,
  join,
  joinWith,
  lines,
  map,
  pipe,
  prop,
  props,
  range,
  splitOn,
  splitOnRegex,
  sum,
  sort,
  show,
  test,
  toLower,
  toUpper,
  trim,
  unlines,
  unwords,
  words,
} = S;

const justValue = prop('value');

export const head = pipe([S.head, justValue]);

export const last = pipe([S.last, justValue]);

export const match = (regexp) => {
  const serializeMaybe = (maybe) => {
    if (S.isNothing(maybe)) {
      return null;
    }
    const { groups, match } = justValue(maybe);
    return {
      groups: S.justs(groups),
      match,
    };
  };

  return pipe([S.match(regexp), serializeMaybe]);
};

export const take = pipe([S.take, justValue]);

export const tap = curry2((message, x) => {
  console.log(`${message}\n${show(x)}`);
  return x;
});
