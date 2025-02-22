// example showing the concept of modules | local modules

// module.exports.demoFun = function example(){
//     console.log("This is an example of modules");
// };

module.exports.demoFun = ()=>{
    console.log("This is an example of modules");
};

// console.log(module);
console.log(module.exports);
console.log(typeof module.exports);

