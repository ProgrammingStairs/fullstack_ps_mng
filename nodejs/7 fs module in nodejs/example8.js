// example of fs module

var fs = require("fs");
console.log("Before readFileSync");
var data = fs.readFileSync('text2.txt','utf-8');
// var data = fs.readFileSync('text2.txt');
console.log("After readFileSync");
console.log("Data : ",data);


