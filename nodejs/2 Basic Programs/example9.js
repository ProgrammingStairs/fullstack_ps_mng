// Example of callback

function myFun(fruitsArray,callback){
    setTimeout(()=>{
        callback(fruitsArray.sort());
    },2000);
}
var arr = ['Banana','Orange','Grapes','Apple'];
console.log("Before sorting  : ",arr);

var fruits = (data)=>{
    console.log("In Ascending Order : ",data);
}
myFun(arr,fruits);