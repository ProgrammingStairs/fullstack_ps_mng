// example of fs module

var fs = require("fs");
var data = 'Data is going to insert in a file';
console.log("Before writeFileSync");
//fs.writeFileSync('text2.txt',data);
fs.appendFileSync('text2.txt',data);
console.log("After writeFileSync");
console.log("Data inserted successfully");


