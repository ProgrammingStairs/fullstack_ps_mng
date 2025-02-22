// example showing the concept of streams

var fs = require('fs');
const pathName = 'myFolder/text1.txt';
const readStream = fs.createReadStream(pathName,'utf-8');
readStream.on('data',(chunk)=>{
    const jsObject = JSON.parse(chunk);
    // console.table(jsObject);
    // console.log(jsObject);
    for(var index in jsObject){
        for(var key in jsObject[index]){
            if(typeof jsObject[index][key]=='object'){
                for(var subkey in jsObject[index][key]){
                    if(typeof jsObject[index][key][subkey]=='object'){}
                    else
                        console.log(subkey+" : "+jsObject[index][key][subkey]);             
                }
            }else
                console.log(key+" : "+jsObject[index][key]);
        }
        console.log("#########################################");
    }
});
