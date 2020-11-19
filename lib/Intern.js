const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, phone, school){

        super(name, id, email, phone);

        this.school = school;
        
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;
