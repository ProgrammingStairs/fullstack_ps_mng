// Example of callback

function myFunction(msg,callback){
    setTimeout(()=>{
        callback(msg);
    },3000);
}

var message = "Email Sent";
var myFun = function(message){
    console.log(message+"\nTask Completed");
}
myFunction(message,myFun);