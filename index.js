const fs = require('fs');
//const test = require('jest');
const inquirer = require('inquirer');
const profileGenerator= require("./profileGenerator");
// const Employee= require("./lib/Employee.js");
const Engineer= require("./lib/Engineer.js");
const Intern= require("./lib/Intern.js");
const Manager= require("./lib/Manager.js");

const teamArray = [];

// const roger= new Employee("roger", 1, "rogerDodger@test.com");

// console.log(roger)

function addManager() {
    console.log("Welcome to the team!");
    inquirer.prompt([
        
        {
            type: "input",
            message: "What is the team manager's name?",
            name: "name"
        },
        {
            type: "number",
            message: "What is the team manager's employee ID?",
            name: "id"

        },
        {
            type: "input",
            message: "What is the team manager's email address?",
            name: "email"
        }, 
        {
            type: "number",
            message: "What is the team manager's office number?",
            name: "officeNumber"
        },
        

    ])
    .then(function(data){
        let employee = new Manager(data.name, data.id, data.email, data.officeNumber);
        teamArray.push(employee);
        addEmployee();
    })
    
}
function addEmployee () {
    inquirer.prompt ([
        {
            type: "list",
            message: "Would you like to add an engineer or an intern to your team?",
            choices: [
                "Engineer",
                "Intern",
                "None"
            ],
            name:"role"
            

        }
    ])
    .then(function(data){
        if(data.role === "Engineer") {
            addEngineer()
        }else if(data.role === "Intern"){
            addIntern();

        }else{
            console.log(teamArray);
            profileGenerator(teamArray);
            console.log("Thank you for using the team profile generator");
            console.log("Check for the html!");

        }

    })

}







function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the engineer's name?",
            name: "name"
        },
        {
            type: "number",
            message: "What is the engineer's employee ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the engineer's email address?",
            name: "email"
        }, 
        {
            type: "input",
            message: "What is the engineer's github?",
            name: "github"
        }

    ])
    .then(function(data){
        
    });
}

function addIntern(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "name"
        },
        {
            type: "number",
            message: "What is the interns's employee ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the intern's email address?",
            name: "email"
        }, 
        {
            type: "input",
            message: "What school does the intern attend?",
            name: "school"
        }

    ])
    .then (function(data){
        

    });
}


