// const test = require("jest");
const Employee= require("../lib/Employee.js");

// testing the baseline employee object
test(" can create an instance of an employee",() => {
    const roger= new Employee();
    expect(typeof roger).toBe("object")
})

