// example showing the concept of streams

var fs = require('fs');
const pathName = 'myFolder/text1.txt';
const readStream = fs.createReadStream(pathName,'utf-8');
readStream.on('data',(chunk)=>{
    // console.log(typeof chunk);
    const jsObject = JSON.parse(chunk);
    console.log("Name : "+jsObject.name);
    console.log("Age : "+jsObject.age);
    console.log("Salary : "+jsObject.salary);
    console.log("State : "+jsObject.address.state);
    console.log("Country : "+jsObject.address.country);    
});
