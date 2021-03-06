const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

class TeamInput {

    constructor() {
        this.allAnswers = [];
    }
    

        async generateTeam() {

            console.log("Creation of your team starts now!");


            // Variable to hold number of team members
            // this allows the user to create as many members they want
            let teamCount = 0;

            // This is the question to all whe user to set how many members are in the team
            let teamAmount = await inquirer.prompt(
                {
                    type: "number",
                    message: "How many employees are in the team?",
                    name: "teamMemCount",
                    validate: function(answer) {
                        if (answer == 0) {
                            return console.log("There has to me at least one member on the team!");
                        }
                        return true;
                    }
                }
            );
                // Sets the number of members in the team
                teamCount = teamAmount.teamMemCount + 1;
                
            // Start of loop of common questions for each employee of the team
            for( var i = 1; i < teamCount; i++){

                // Prompts user to answer the basic questions of the employee
                let employee = await inquirer.prompt([ 
                    {
                        type: "input",
                        message: `What is employee (${i})'s name?`,
                        name: "name"
                    },
                    {
                        type: "input",
                        message: `What is the employee (${i})'s id?`,
                        name: "id"
                    },
                    
                    {
                        type: "input",
                        message: `What is the employee (${i})'s Email?`,
                        name: "email",
                        validate: async (input) => {
                            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
                                return true;
                            }
                            return "Please enter a valid email address.";
                        }
                    },

                    {
                        type: "input",
                        message: `What is the employee (${i})'s Phone Number?`,
                        name: "phone",
                        validate: async (input) => {
                            var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
                            if (phoneRegex.test(input)) {
                                return true;
                            }
                            return "Please enter a valid phone number.";
                        }

                    },

                    {
                        type: "list",
                        message: `what the employee (${i})'s title?`,
                        name: "role",
                        choices: ["Engineer", "Intern", "Manager"]
                    }
                    
                ])          

                // Switch Case takes place of ifElse function
                // and determines what question to aske based on the Role of the employee
                switch (employee.role){
                    case "Manager":

                        // Question and data creation for Manager
                        let question = await inquirer.prompt([
                            {
                                type: "input",
                                message: "What is the Manager's Office Number?",
                                name: "officeNumber"
                            }
                        ])
                        employee.officeNumber = question.officeNumber;
                        
                        break;

                    //Question and data creation for intern
                    case "Intern":
                         let intern = await inquirer.prompt([
                            {
                                type: "input",
                                message: "What school is your Intern attending?",
                                name: "school"
                            }
                            
                        ])

                        employee.school = intern.school;
                       
                        break;

                    //Question and data creation for engineer
                    case "Engineer":
                        let engineer = await inquirer.prompt([
                            {
                                type: "input",
                                message: "What is your Engineer's GitHub Id?",
                                name: "github"
                            }
                        ])
                        employee.github = engineer.github;
                        
                        break;

                } // End of Switch Case
            // console.log(employee);    
            this.allAnswers.push(employee);  
    
            } // End of For loop
            // console.log(this.allAnswers);
        }
    
}
module.exports.TeamInput = TeamInput;