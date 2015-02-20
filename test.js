"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var _ = require("./");

var foldl = _.foldl;
var foldr = _.foldr;
var reduce = _.reduce;
var reduceRight = _.reduceRight;



describe("fj-fold", function () {
  var join = function (a, b) {
    return "" + a + b;
  };

  it("#foldl", function () {
    assert.equal(foldl, reduce);
    assert.equal(typeof foldl, "function");
    assert.equal(typeof foldl(0), "function");
    assert.equal(typeof foldl(0)(join), "function");
    assert.equal(foldl(0)(join)([1]), "01");
    assert.equal(foldl(0)(join)([1, 2]), "012");
    assert.equal(foldl("x")(join)([1, 2]), "x12");
  });

  it("#foldr", function () {
    assert.equal(foldr, reduceRight);
    assert.equal(typeof foldr, "function");
    assert.equal(typeof foldr(0), "function");
    assert.equal(typeof foldr(0)(join), "function");
    assert.equal(foldr(0)(join)([1]), "01");
    assert.equal(foldr(0)(join)([1, 2]), "021");
    assert.equal(foldr("x")(join)([1, 2]), "x21");
  });
});