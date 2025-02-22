// example of fs module

var fs = require("fs");
var fileName = new Date().getTime()+'_file.txt';
var data = 'Data is going to insert in '+fileName;
fs.writeFile(fileName,data,(error)=>{
    if(error)
        console.log("Error : ",error);
    else{
        console.log("File created and Data inserted successfully");
    } 
});

