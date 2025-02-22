// example showing the concept of modules | local modules

var data = require('./module12.js');
// console.log("data : ",data);
// console.log("typeof data : ",typeof data);
console.log(data.myObj.protocol('https://')+data.myObj.domain('www.google.com'));
