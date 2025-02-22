// example of fs module

var fs = require("fs");
var fileName = new Date().getTime()+'_file.txt';
var recordFileName = 'record.txt';
var data = 'Data is going to insert in '+fileName;
fs.writeFileSync(fileName,data);
fs.appendFileSync(recordFileName,fileName+'\n');
console.log('Task completed');


