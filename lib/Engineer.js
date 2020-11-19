const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, phone, github){

        super(name, id, email, phone);

        this.github = github;
        
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;