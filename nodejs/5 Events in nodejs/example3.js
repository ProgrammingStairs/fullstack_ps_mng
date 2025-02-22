// Example showing the concept of events
var events = require('events');
var eventEmitter = new events();
//console.log(eventEmitter);

eventEmitter.once('customEvent',function(){
    console.log("This is an example of Events in node js");
});

eventEmitter.emit('customEvent');
eventEmitter.emit('customEvent');
eventEmitter.emit('customEvent');
eventEmitter.emit('customEvent');
eventEmitter.emit('customEvent');
