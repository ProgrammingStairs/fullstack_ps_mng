// example showing the concept of streams

var fs = require("fs");
const pathName = "myFolder/text1.txt";
if(fs.existsSync(pathName))
    console.log("File already exist");
else{
    fs.createWriteStream(pathName);
    console.log("File created successfully");
}
    
