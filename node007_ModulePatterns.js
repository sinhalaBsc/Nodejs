/*
in previous tutorial we looked up how to import one function form other module.
In this tutorial we are looking multiple import from other module and it's various patterns.
*/

var stuff = require('./node007_patterns03'); // import all module as object
//var stuff = require('./node007_patterns02');
//var stuff = require('./node007_patterns03');

// use 'stuff' import as object
console.log(stuff.counter(['s','a','m','a','d','h','i']));
console.log(stuff.adder(4,5));
console.log(stuff.pi);
