import { curry3 } from 'fj-curry';


const _foldl = (initial, combinator, list) =>
  list.reduce(combinator, initial);
const _foldr = (initial, combinator, list) =>
  _foldl(initial, combinator, list.reverse());

export let foldl = curry3(_foldl);
export let foldr = curry3(_foldr);
export let reduce = foldl;
export let reduceRight = foldr;
