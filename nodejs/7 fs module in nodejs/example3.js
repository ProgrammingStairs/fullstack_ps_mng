// example of fs module

var fs = require("fs");
fs.rename('text2.txt','newname.txt',(error)=>{
    if(error)
        console.log("Error while renaming a file : ",error);
    else
        console.log("File renamed successfully");
});
