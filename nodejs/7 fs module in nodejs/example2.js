// example of fs module

var fs = require("fs");
fs.unlink('text3.txt',(error)=>{
    if(error)
        console.log("File not available to delete : ",error);
    else
        console.log("File deleted successfully");
});
