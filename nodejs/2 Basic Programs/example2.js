// Example of Prototype

function Vehicle(){
    this.name = 'Audi',
    this.model = 2024,
    this.color = 'black'

    this.welcomeMessage = function(){
        console.log('Welcome to Audi ShowRoom');
    }    
}
Vehicle.prototype.getData = function(){
    return `Details : \nName : ${this.name}\nModel : ${this.model}\ncolor : ${this.color} `
}
const obj = new Vehicle();
obj.welcomeMessage();
console.log(obj.getData());
