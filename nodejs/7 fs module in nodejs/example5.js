// example of fs module

var fs = require("fs");
var fileName = 'text1.txt';

console.log("Before readFile Function");

fs.readFile(fileName,'UTF-8',(error,data)=>{
    if(error)
        console.log("Error : ",error);
    else 
        // console.log(data);
        // console.log("Data : "+data);
        // console.log(data.toString());
           console.log(data);
    });

console.log("After readFile Function");