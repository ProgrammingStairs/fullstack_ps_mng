// example showing the concept of modules | local modules

var data = require('./module2.js');
console.log("data : ",data);
console.log("typeof data : ",typeof data);
console.log("result : ",data.value);
