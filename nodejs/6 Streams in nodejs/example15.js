// example showing the concept of transform streams

var fs = require('fs');
var zlib = require('zlib');
var gzipObj = zlib.createGzip();

var pathName = "myFolder/text1.txt";
var zipName = "myFolder/text1.txt.zip"; 

const  readStream1 = fs.createReadStream(pathName);
const  readStream2 = fs.createWriteStream(zipName);

const res = readStream1.pipe(gzipObj);
res.pipe(readStream2);
console.log("Data zipped successfully");
