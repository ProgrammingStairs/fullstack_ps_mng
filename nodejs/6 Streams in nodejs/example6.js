// example showing the concept of streams

var fs = require("fs");
const pathName = "myFolder/text1.txt";
const content = "Trying to write one more time";
function writeContent(){
    writeStream = fs.createWriteStream(pathName);
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
writeStream.close();
writeStream.on('finish',()=>{
    console.log('....Data inserted successfully');
});    

