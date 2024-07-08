class Account{
    acc_id ;
    acc_name;
    acc_balance;
    mini_balance = 100;
    constructor(Id,name,amount){
        this.acc_id=Id;
        this.acc_balance = amount;
        this.acc_name = name;

    }
}
let a1 = new Account(101,"rahul",5000)
let a2 = new Account(1002,"priyanka",10000)
console.log(a1 , a2);