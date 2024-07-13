class Account{
    acc_Name;
    acc_Email;
    acc_Address;
    constructor(name,email,addr){
        this.acc_Name=name
        this.acc_Email=email
        this.acc_Address=addr
    }
}
export default Account; //  this is for ES6 method for ES5 we used " module.exports = Account"