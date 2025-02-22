// example showing the concept of transform streams

var fs = require('fs');
var zlib = require('zlib');
var gunzipObj = zlib.createGunzip();

const  readStream = fs.createReadStream("myFolder/text1.txt.zip");
const  writeStream = fs.createWriteStream("myFolder/text3.txt");

readStream.pipe(gunzipObj).pipe(writeStream);
console.log("Data unzipped successfully");
