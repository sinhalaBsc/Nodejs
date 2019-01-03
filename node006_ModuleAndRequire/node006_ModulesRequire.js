/* we don't need our whole programe written on one file. we want to divide our code
for some resons. for that we are using 'Modules'

*/
var counter = require('./node006_module'); //  import the module and define as function what we nee.
                              // node.js will automatically find the javascript file by only name
                             // direct of module relative to current js file.no need to put .js.

console.log(counter(['s','a','m','a','d','h','i']));
