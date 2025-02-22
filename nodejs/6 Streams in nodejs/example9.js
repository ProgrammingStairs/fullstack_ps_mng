// example showing the concept of streams

var fs = require("fs");
const pathName = "myFolder/text1.txt";
const readStream = fs.createReadStream(pathName,'utf-8');

readStream.on('data',(chunk)=>{
    console.log(chunk);
});

readStream.on('end',()=>{
    console.log("Data Reading Completed");
});