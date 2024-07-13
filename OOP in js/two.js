class Account{
    minimum_blance = 1000;
    open_Account(){
        console.log("Account Open successfuly")

    }
    deposite_Amount(){
        console.log("Amount is deposited")

    }
    withdrawl_Amount(){
        console.log("Amount withdrawl successfuly")

    }
    check_Balance(){
        console.log("your balance is 10000")
    }
    delete_Account(){
        console.log("Account is deleted")

    }

}
var a1 = new Account()
a1.open_Account()
a1.delete_Account()
a1.withdrawl_Amount()
a1.check_Balance()
a1.delete_Account()

console.log(a1)
