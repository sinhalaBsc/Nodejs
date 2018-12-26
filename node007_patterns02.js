// we have to pass tree modules to export
// pattern 002

module.exports.counter=function(arr){

  return 'There are '+arr.length+' elements is this array';

}

module.exports.adder =function(a,b){
  return `the sum of the two numbers is ${a+b}`;
};

module.exports.pi=3.142;
