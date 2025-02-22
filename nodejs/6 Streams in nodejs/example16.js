// example showing the concept of transform streams

var fs = require('fs');
var zlib = require('zlib');
var gzipObj = zlib.createGzip();

const  readStream = fs.createReadStream("myFolder/text1.txt");
const  writeStream = fs.createWriteStream("myFolder/text1.txt.zip");

readStream.pipe(gzipObj).pipe(writeStream);
console.log("Data zipped successfully");
