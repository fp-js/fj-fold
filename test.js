"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var foldl = require("./").foldl;



describe("fj-fold", function () {
  var sum = function (a, b) {
    return a + b;
  };

  it("#foldl", function () {
    assert.equal(typeof foldl, "function");
    assert.equal(typeof foldl(0), "function");
    assert.equal(typeof foldl(0)(sum), "function");
    assert.equal(foldl(0)(sum)([1]), 1);
    assert.equal(foldl(0)(sum)([1, 2]), 3);
    assert.equal(foldl(1)(sum)([1, 2]), 4);
  });
});