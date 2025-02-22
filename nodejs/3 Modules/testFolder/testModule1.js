// example showing the concept of modules | local modules

var {status,message} = require('../moduleFolder/module1.js');
console.log("status : ",status);
console.log("Success : ",status.SUCCESS);

console.log("message : ",message);
console.log("Success : ",message.SUCCESS);



