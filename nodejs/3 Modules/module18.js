// example showing the concept of modules | local modules

module.exports.obj = new function Employee(){
    this.name='Andrew Anderson',
    this.salary=20000,
    this.age=45,
    this.address={
        city:'Indore',
        state:'MP',
        country:'India'
    },
    this.pincode=452010,
    this.showDetails = function(){
        console.log("Name : ",this.name);
        console.log("Salary : ",this.salary);
        console.log("Age : ",this.age);
        console.log("City : ",this.address.city);
        console.log("State : ",this.address.state);
        console.log("Country : ",this.address.country);
        console.log("Pincode : ",this.pincode);
    }  
}

// console.log(module);
// console.log(module.exports);
// console.log(typeof module.exports);

