const test = require('jest');
const inquirer = require('inquirer');
const profileGenerator= require("./profileGenerator");
// const Employee= require("./lib/Employee.js");
const Engineer= require("./Develop/lib/Engineer.js");
const Intern= require("./Develop/lib/Intern.js");
const Manager= require("./Develop/lib/Manager.js");

const teamArray = [];
//this starts the inquirer input process
addManager();

//This function starts inquires about the manager
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
    });
    
};

// This function makes gives the user the option to add more employees, Engineer or intern, or to end input process, which will tigger the  html generator process
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

    });

};

//once the user selects to adds an engineer, this function will add the new engineer object to the array
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
        let employee = new Engineer(data.name, data.id, data.email, data.github);
        teamArray.push(employee);
        addEmployee();
        
    });
};

//once the user selects to adds an intern, this function will add the new intern object to the array
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
        let employee = new Intern(data.name, data.id, data.email, data.school);
        teamArray.push(employee);
        addEmployee();

    });
};


