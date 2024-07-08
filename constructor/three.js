class Account{
    constructor(name,number,email){
        this.acc_Name = name;
        this.acc_Number = number;
        this.Acc_Email = email;
    }

}
class SA extends Account{
    acc_Id;
    acc_Balance = 0;
    mini_Balance = 1000;
    constructor(name,number,email,id,amount){
        super(name,number,email)
        this.acc_Id = id;
        this.acc_Balance = this.acc_Balance + amount

    }

}
class CA extends Account{
    acc_Id;
    acc_Balance = 0;
    mini_Balance = 10000;
    constructor(name,number,email,id,amount){
        super(name,number,email)
        this.acc_Id= id;
        this.acc_Balance=this.acc_Balance + amount;
        
    }
    get_balance(){
        this.acc_Balance = this.acc_Balance - this.mini_Balance
        console.log(this.acc_Balance)
    }

}
let a1 = new Account()
let sa1 = new SA("prem",100001200303,"prem@gmail.com",101,10000)
let ca1 = new CA("bibek",329329323223,"bibek@gmail.com",102,300000)
console.log(sa1)
console.log(ca1)
ca1.get_balance()