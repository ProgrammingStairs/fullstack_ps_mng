function myFun(obj){
    return `Hello ${obj.email}, your name is ${obj.fullName} and your age and address are ${obj.age} and ${obj.address}`
}
var obj = {
    fullName : "Andrew Anderson",
    age : 56,
    address : "Indore, Madhya Pradesh",
    email : "andrew@gmail.com"
}

var result = <h2>{myFun(obj)}</h2>
export default result;