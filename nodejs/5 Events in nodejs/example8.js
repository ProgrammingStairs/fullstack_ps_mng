// Example showing the concept of events
var events = require('events');
var eventEmitter = new events();

eventEmitter.on('data',function(){
    console.log("data event executes");    
});
eventEmitter.on('error',function(){
    console.log("error event executes");    
});
eventEmitter.on('end',function(){
    console.log("end event executes");    
});
eventEmitter.on('finish',function(){
    console.log("finish event executes");    
});

eventEmitter.emit('data');
eventEmitter.emit('error');
eventEmitter.emit('end');
eventEmitter.emit('finish');
