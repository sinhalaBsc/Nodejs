// we have to pass tree modules to export
// pattern 001

var counter=function(arr){

  return 'There are '+arr.length+' elements is this array';

}

var adder =function(a,b){
  return `the sum of the two numbers is ${a+b}`;
};

var pi=3.142;

// we can export as objects
module.exports.counter=counter;
module.exports.adder=adder;
module.exports.pi=pi;
