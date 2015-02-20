import assert from 'assert';
import { foldl } from './';


describe('fj-fold', () => {
  let sum = (a, b) => a + b;

  it('#foldl', () => {
    assert.equal(typeof foldl, 'function');
    assert.equal(typeof foldl(0), 'function');
    assert.equal(typeof foldl(0)(sum), 'function');
    assert.equal(foldl(0)(sum)([1]), 1);
    assert.equal(foldl(0)(sum)([1, 2]), 3);
    assert.equal(foldl(1)(sum)([1, 2]), 4);
  });
});
