// program showing the concept of taking values from user

var readLine = require('readline');
var instance = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});

instance.question("Enter first number : ",(num1)=>{
    instance.question("Enter second number : ",(num2)=>{
        instance.question("Enter third number : ",(num3)=>{
            console.log("Sum : "+(parseInt(num1)+parseInt(num2)+parseInt(num3)));
            instance.close();
        });
    }); 
});