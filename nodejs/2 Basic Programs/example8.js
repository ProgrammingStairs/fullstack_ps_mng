// Example of callback

function myFun(callback){
    console.log("Before");
    setTimeout(()=>{
        var obj = {
            name:"Andrew Anderson",
            age : 78,
            salary : 67890
        }
        callback(obj);
    },5000);
    console.log("After");
}
var printData = (obj)=>{
    console.log(`Hello ${obj.name}, your age is ${obj.age} and salary is ${obj.salary}`);
}
myFun(printData);