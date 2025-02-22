// Example of callback

function myFunction(callback){
    console.log("This is Higher Order Function");
    callback();
}
myFunction(()=>{
    console.log("This is an example of callback");
});