// example of fs module

var fs = require("fs");
/*
fs.open('text1.txt','w',(error)=>{
    if(error)
        console.log("Error occured");
    else
        console.log("File created successfully");
});
*/

fs.open('text3.txt','wx',(error)=>{
    if(error)
        console.log("Already Created ",error);
    else
        console.log("File created successfully");
});
