// Example showing the concept of events
var events = require('events');
var eventEmitter = new events();
//console.log(eventEmitter);

var listner1 = function(){
    console.log("This is an example of Events in node js statement 1");
};
var listner2 = function(){
    console.log("This is an example of Events in node js statement 2");
};
var listner3 = function(){
    console.log("This is an example of Events in node js statement 3");
};

eventEmitter.addListener('customEvent',listner1);
eventEmitter.addListener('customEvent',listner2);
eventEmitter.on('customEvent',listner3);
eventEmitter.removeAllListeners('customEvent');

eventEmitter.emit('customEvent');


const arr = eventEmitter.listeners("customEvent");
console.log(arr);
console.log("No. of listeners : ",arr.length);

