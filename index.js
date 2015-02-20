"use strict";

var curry3 = require("fj-curry").curry3;



var _foldl = function (initial, combinator, list) {
  return list.reduce(combinator, initial);
};
var _foldr = function (initial, combinator, list) {
  return _foldl(initial, combinator, list.reverse());
};

var foldl = exports.foldl = curry3(_foldl);
var foldr = exports.foldr = curry3(_foldr);
var reduce = exports.reduce = foldl;
var reduceRight = exports.reduceRight = foldr;
Object.defineProperty(exports, "__esModule", {
  value: true
});