// Example of callback

var a=4;
var b=7;
function calculate(a,b,operation,callback){
    var result;
    switch(operation.toLowerCase()){
        case "addition" : result = a+b;
                          break; 
        case "subtraction" : result = a-b;
                          break;  
        case "division" : result = a/b;
                          break; 
        case "multiplication" : result = a*b;
                          break; 
        default: result="Invalid Operation";
                 break;
    }
    callback(result);
}
var resultFun = function(result){
    console.log("Result : ",result);
}
calculate(a,b,"MULTIPLICATION",resultFun);