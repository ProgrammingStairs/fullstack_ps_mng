// example of fs module

var fs = require("fs");
var fileName = 'text1.txt';
var data = "This is an example of Node Js FS Module.....";

console.log("Before writeFile | appendFile Function");

// fs.writeFile(fileName,data,(error)=>{
//     if(error)
//         console.log("Error : ",error);
//     else 
//         console.log("Data inserted successfully");
// });

fs.appendFile(fileName,data,(error)=>{
    if(error)
        console.log("Error : ",error);
    else 
        console.log("Data appending successfully");
});


console.log("After writeFile Function");