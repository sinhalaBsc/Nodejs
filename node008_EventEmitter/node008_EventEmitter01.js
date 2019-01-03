/*
we already know event in javascrip and jquary.the special thing of event that event inspect
is checking periodically if event is occured.
*/

var evnt = require('events'); // import 'events' module.this module is not custom module.
                                // because of that no need to specify the path.

var myEmitter =new evnt.EventEmitter();  // get EventEmitter object  through 'events' module
myEmitter.on('someEvent',function(msg){  // get EventEmitter have events eg- on,click..ect.
// Emitter event object.event('event name' , fucntion that want to work when event occured )
  console.log(msg);
});

myEmitter.emit('someEvent','the event was emitted'); // emit the event.and fuction argument
