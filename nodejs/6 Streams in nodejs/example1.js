// example showing the concept of streams

var fs = require("fs");
// console.log(fs);
// console.log(typeof fs);
fs.mkdir('myFolder',(error)=>{
    if(error){
        console.log("Error : ",error);
    }
    else
        console.log("Folder created successfullly");
        
});

/*
Here {recursive : false} is false by default as here we needs to create parent folder first then we can create child folder in case of {recursive:false} which is present by default

fs.mkdir('myFolder',{recursive:false},(error)=>{
    if(error){
        console.log("Error : ",error);
    }
    else
        console.log("Folder created successfullly");
        
});

*/