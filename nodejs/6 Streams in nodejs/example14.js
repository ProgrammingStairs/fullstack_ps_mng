// example showing the concept of streams

var fs = require('fs');
const pathName1 = 'myFolder/text1.txt';
const pathName2 = 'myFolder/text2.txt';

const writeStream = fs.createWriteStream(pathName2);
const readStream = fs.createReadStream(pathName1,'utf-8');

readStream.pipe(writeStream);
console.log("Data transfer completed");
