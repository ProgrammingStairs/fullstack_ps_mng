// Example showing the concept of events

import EventEmitter from 'events';
class MyClass extends EventEmitter{}
const eventEmitter = new MyClass();

var listener = function(){
    console.log("This is also an example of events");
}

eventEmitter.on('newListener',()=>{
    console.log('new listener emitted');
});
eventEmitter.on('removeListener',()=>{
    console.log('listener is removes');
});

eventEmitter.on('myCustomEvent',listener);
eventEmitter.on('myCustomEvent',listener);
eventEmitter.removeListener('myCustomEvent',listener);
eventEmitter.emit("myCustomEvent");
