
// Adding the required Modules
var evnt = require('events'); // import 'events' module.
var utl =require('util');     // import 'util' module.

var Person = function(name){  // make constructor function for 'Person'
  this.name=name;
}

utl.inherits(Person,evnt.EventEmitter); // do inherits 'Person' function with 'events.EventEmitter' object
//after inherits 'Person' can use 'evnt.EventEmitter' behaviours and properties

var james = new Person('james'); // create a object for user with 'Person' function
var mary  = new Person('mary');  // create a object for user with 'Person' function
var ryu   = new Person('ryu');  // create a object for user with 'Person' function

var people =[james,mary,ryu]; // create array to user 'for loop'
                                    //  this only for convenience to add events for all people

people.forEach(function(person){
   person.on('speak',function(msg){  // add the 'events' name 'speak' to all person
     console.log(person.name+' said : '+msg);   // function that when event occured
   });

});
james.emit('speak','hey dudes'); // give event for 'james' for testing purpose
