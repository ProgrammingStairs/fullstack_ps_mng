// example showing the concept of streams

var fs = require('fs');
const pathName = 'myFolder/text1.txt';
var obj = [{
    name:"Andrew Anderson",
    salary : 45678,
    age:56,
    address : {
        state:"MP",
        country:"India"
    }
},{
    name:"Andrew Anderson",
    salary : 45678,
    age:56,
    address : {
        state:"MP",
        country:"Netherland"
    }
},{
    name:"Andrew Anderson",
    salary : 45678,
    age:56,
    address : {
        state:"MP",
        country:"Australia"
    }
}]
const writeStream = fs.createWriteStream(pathName);
writeStream.write(JSON.stringify(obj));
writeStream.close();
writeStream.on('finish',()=>{
    console.log('Data insertion successfull');
});
