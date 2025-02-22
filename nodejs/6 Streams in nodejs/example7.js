// example showing the concept of streams

var fs = require("fs");
const pathName = "myFolder/text1.txt";
const content = "Trying to write one more time";
function writeContent(){
    //const writeStream = fs.createWriteStream(pathName,{flags:'w'}); // for writing and it overrides content, by default if {flags:'w'} is not written its mechanism is to write and write content in a file
    const writeStream = fs.createWriteStream(pathName,{flags:'a'}); // appending in a file
    writeStream.write(content);
    console.log("Data Inserted successfully");
}

if(fs.existsSync(pathName)){
    console.log("File already exist");
    writeContent();
}
else{
    console.log("File created successfully");
    writeContent();
}
    