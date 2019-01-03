 // nomal fucntion statment ************************************************
 function sayHi(){
   console.log('hi');
 }
 sayHi();


 // function  expression ***************************************************
 var sayBye= function(){   // the thing is this function store in varialbe
   console.log('bye');     // we can pass this fuction as argument
 }
 sayBye();


 // callback function ******************************************************
 function callFunction(fun){   // 'fun' is fuction varible.
   fun();                      // 'fuc' variable value is 'sayBye' and it is a function.
 };

 var sayBye =function(){      // this is anonymous function load on 'sayBye' variable.
   console.log('bye');
 };
callFunction(sayBye);         // we pass the sayBye function as argument


