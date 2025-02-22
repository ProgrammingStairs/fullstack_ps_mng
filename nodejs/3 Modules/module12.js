// example showing the concept of modules | local modules

const obj = {
    domain : function(value){
        console.log("gets entry in domain function");
        return value;
    },
    protocol : function(value){
        console.log("gets entry in protocol function");
        return value;
    }
}
module.exports.myObj = obj;

// console.log(module);
 console.log(module.exports);
// console.log(typeof module.exports);

