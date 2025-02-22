// program showing the concept of taking values from user

var readLine = require('readline');
var instance = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});

instance.question("Enter Message : ",(msg)=>{
    console.log("Message : ",msg);
    instance.close();
});