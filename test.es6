import assert from 'assert';
import { foldl, foldr, reduce, reduceRight} from './';


describe('fj-fold', () => {
  let join = (a, b) => '' + a + b;

  it('#foldl', () => {
    assert.equal(foldl, reduce);
    assert.equal(typeof foldl, 'function');
    assert.equal(typeof foldl(0), 'function');
    assert.equal(typeof foldl(0)(join), 'function');
    assert.equal(foldl(0)(join)([1]), '01');
    assert.equal(foldl(0)(join)([1, 2]), '012');
    assert.equal(foldl('x')(join)([1, 2]), 'x12');
  });

  it('#foldr', () => {
    assert.equal(foldr, reduceRight);
    assert.equal(typeof foldr, 'function');
    assert.equal(typeof foldr(0), 'function');
    assert.equal(typeof foldr(0)(join), 'function');
    assert.equal(foldr(0)(join)([1]), '01');
    assert.equal(foldr(0)(join)([1, 2]), '021');
    assert.equal(foldr('x')(join)([1, 2]), 'x21');
  });
});
