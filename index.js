const fs = require('fs');
const test = require('jest');
const inquirer = require('inquirer');
// const profileGenerator= require("../profileGenerator");
const Employee= require("./lib/Employee.js");
const Engineer= require("./lib/Engineer.js");
const Intern= require("./lib/Intern.js");
const Manager= require("./lib/Manager.js");

const employees = [];


const roger= new Employee("roger", 1, "rogerDodger@test.com");

console.log(roger)

