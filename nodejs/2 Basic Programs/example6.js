// Example of callback

function countFun(limit,callback){
    let x = setInterval(()=>{
        if(limit>0)
            callback(limit--);
        else{
            clearInterval(x);
            console.log("Time's Up");
        }
    },1000);
}
var myFun = (num)=>{
    console.log(num);
}
var limit = 10;
countFun(limit,myFun);