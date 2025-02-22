// example showing the concept of streams

var fs = require("fs");
const pathName = "myFolder/text1.txt";
const readStream = fs.createReadStream(pathName);
readStream.on('data',(chunk)=>{
    // console.log(chunk);
    // console.log(""+chunk);
    console.log(chunk.toString());
});

readStream.on('end',()=>{
    console.log("Data Reading Completed");
});