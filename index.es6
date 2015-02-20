import { curry3 } from 'fj-curry';


const _foldl = (initial, combinator, list) => list.reduce(combinator, initial);

export let foldl = curry3(_foldl);
