// example showing the concept of streams

var fs = require("fs");
// console.log(fs);
// console.log(typeof fs);
// if parent folder is not present and then directly we create sub folder with respect to parent folder, so by writing {recursive:true} will creates parent folder first and then creates sub folder.
fs.mkdir('myFolder1/myfolder2',{recursive:true},(error)=>{
    if(error){
        console.log("Error : ",error);
    }
    else
        console.log("Folder created successfullly");
        
});
