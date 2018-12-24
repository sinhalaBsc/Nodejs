// Global Object

/*
for alert,scroll,setTimeout..ect objects in browser we used like 'global object' but it really was window object.
In node.js we don't have window object. but there have follwing global objects
url >> https://nodejs.org/api/globals.html
*/
// global object 'console'
console.log('hey samadhi');

// global object 'setTimeout'
setTimeout(function(){console.log('3 seconds have passed')},3000);

// global object 'setInterval'
setInterval(function(){console.log('2 seconds have passed')},2000);

// with multiple global objects
var time=0;
var timer=setInterval( function(){
  time+=2;
  console.log(time+' seconds have passed');
  if(time>5){
    clearInterval(timer);
  }
},2000);

// global object '__dirname'
console.log(__dirname); // this will show current directory of this file

// global object '__filename'
console.log(__filename); // this will show this current file name
