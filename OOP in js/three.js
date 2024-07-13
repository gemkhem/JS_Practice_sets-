class Account{
    acc_balance = 10000;
    mini_balance = 1000;
    open_Account(){
        console.log("Account Opened Successfully")
    }
    deposite_Amount(amount){
    this.acc_balance = this.acc_balance + amount
    }
    get_Balance(){
        return this.acc_balance - this.mini_balance
        
    }
    withdrawl_Amount(amount){
        this.acc_balance = this.acc_balance - amount
    }

}
let a1 = new Account()
a1.open_Account()
a1.deposite_Amount(500)
a1.get_Balance()
a1.withdrawl_Amount(2000)
console.log(a1)
