// nomal fucntion statment ********************************************
 function sayHi(){
   console.log('hi');
 }
 sayHi();


// function  expression ***********************************************
 var sayBye= function(){   // the thing is this function store in varialbe
   console.log('bye');     // we can pass this fuction as argument
 }
 sayBye();


// callback function **************************************************
 function callFunction(fun){
   fun();
 };

 var sayBye =function(){
   console.log('bye');
 };
callFunction(sayBye); // we pass the sayBye function as argument
