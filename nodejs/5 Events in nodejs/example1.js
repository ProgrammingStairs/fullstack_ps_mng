// Example showing the concept of events

// var events = require('events').EventEmitter;
// var eventEmitter = new events();
// console.log(eventEmitter);

// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// console.log(eventEmitter);

var events = require('events');
var eventEmitter = new events();
//console.log(eventEmitter);

var listener = function(){
    console.log("This is an example of Events in node js");
}
eventEmitter.on('customEvent',listener);
eventEmitter.emit('customEvent');
