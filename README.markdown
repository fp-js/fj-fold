# fj-fold

[![Build Status](https://travis-ci.org/fp-js/fj-fold.svg)](https://travis-ci.org/fp-js/fj-fold) [![npm version](https://badge.fury.io/js/fj-fold.svg)](http://badge.fury.io/js/fj-fold)
> FP-style array reduce


## Installation

`npm install fj-fold --save`

## Usage

```js
var foldl = require('fj-fold').foldl;
var foldr = require('fj-fold').foldr;

foldl('x')(join)([1, 2]); // => 'x12'
foldr('x')(join)([1, 2]); // => 'x21'
```
