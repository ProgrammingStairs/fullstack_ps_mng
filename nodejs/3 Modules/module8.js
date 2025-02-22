// example showing the concept of modules | local modules

function example(){
    console.log("This is an example of modules");
}
module.exports.demoFun = example();

// console.log(module);
console.log(module.exports);
console.log(typeof module.exports);

