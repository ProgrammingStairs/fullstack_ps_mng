// Example of callback

function myFun(fruitsArray,callback){
    setTimeout(()=>{
        callback(fruitsArray.sort((a,b)=>{
            // console.log("a : "+a+" b : "+b);
            return a-b;
        }));
    },2000);
}
var arr = [34,78,3,2,678];
console.log("Before sorting  : ",arr);

var fruits = (data)=>{
    console.log("In Ascending Order : ",data);
}
myFun(arr,fruits);