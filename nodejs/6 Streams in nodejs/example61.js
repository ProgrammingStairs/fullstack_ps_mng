// example showing the concept of streams

var fs = require("fs");
const pathName = "myFolder/text1.txt";
const content = "Trying to write one more time";
const writeStream = fs.createWriteStream(pathName);
writeStream.write(content);
//console.log("Data Inserted successfully");
writeStream.close();
writeStream.on('finish',()=>{
    console.log('Data inserted successfully');
});    
