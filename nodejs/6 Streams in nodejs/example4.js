// example showing the concept of streams

var fs = require("fs");

if(fs.existsSync('myFolder1/myfolder2'))
    console.log("Folder already exists");
else{
    fs.mkdir('myFolder1/myfolder2',{recursive:true},(error)=>{
        if(error)
            console.log("Error : ",error);
        else
            console.log("Folder created successfullly");        
    });    
}
