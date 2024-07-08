class Student{
    U_Id;
    S_class;
    to_Pass = 40;
    constructor(Id, grade, name,amount){
        this.U_Id = Id;
        this.S_class = grade;
        this.name =name;
        this.fee = amount;
    }
    isAgoodstudent(){
        console.log(this.name + " is a good student ")
    }
    passed(marks){
        console.log(marks > this.to_Pass ? marks + " marks you passed the exam ":marks + " marks sry you failed your exam ");
        
    }

}
let a1 = new Student(101,11,"khem",50000)
a1.isAgoodstudent();
a1.passed(60);
console.log(a1);

let a2 = new Student(102, 12, "prem", 60000)
a2.isAgoodstudent();
a2.passed(30);
console.log(a2)