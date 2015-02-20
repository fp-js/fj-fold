"use strict";

var curry3 = require("fj-curry").curry3;



var _foldl = function (initial, combinator, list) {
  return list.reduce(combinator, initial);
};

var foldl = exports.foldl = curry3(_foldl);
Object.defineProperty(exports, "__esModule", {
  value: true
});