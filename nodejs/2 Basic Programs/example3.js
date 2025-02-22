// Example of Prototype

function Bank(){
    this.setDetails = function(name,actno,balance){
        this.name=name;
        this.actno=actno;
        this.balance=balance;
    }
}
Bank.prototype.showBalance = function(){
    console.log("\nName : ",this.name);
    console.log("Account Number : ",this.actno);
    console.log("Balance : ",this.balance);
}
Bank.prototype.deposit = function(damt){
    this.balance=this.balance+damt;
}
Bank.prototype.withdraw = function(wamt){
    if(wamt>this.balance)
        this.balance = "Not sufficient Amount";
    else
        this.balance = this.balance-wamt;
}
const obj = new Bank();
obj.setDetails("Andrew Anderson","ACT123ABC",20000);
obj.showBalance();
obj.deposit(10000);
obj.withdraw(1200);
obj.showBalance();
