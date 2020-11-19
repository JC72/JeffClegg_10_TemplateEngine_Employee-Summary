const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, phone, officeNumber){

        super(name, id, email, phone);

        this.officeNumber = officeNumber;
        
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;
