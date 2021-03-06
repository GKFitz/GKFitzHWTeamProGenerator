// const test = require("jest");
const Employee= require("../lib/Employee.js");

// testing the baseline employee object
test(" can create an instance of an employee",() => {
    const roger= new Employee();
    expect(typeof roger).toBe("object")
})

// set the name
test("set the name of an employee",() => {
    const name= "roger";
    const roger= new Employee(name);
    expect(roger.name).toBe(name)
})

// set the ID
test("set the employeeID of an employee",() => {
    const id= 1;
    const roger= new Employee("name", id);
    expect(roger.employeeID).toBe(id)
})

// set email
test("set the email of an employee",() => {
    const email= "rogerDoger@test.com";
    const roger= new Employee("name", 1, email);
    expect(roger.email).toBe(email)
})

// get the name with the method
test("get the name of an employee with the method",() => {
    const name= "roger";
    const roger= new Employee(name);
    expect(roger.getName()).toBe(name);
})

// get the id with method
test("get the employeeID of an employee with the method",() => {
    const id= 1;
    const roger= new Employee("name", id);
    expect(roger.getId()).toBe(id);
})

// get the email with method
test("get the email of an employee with the method",() => {
    const email= "rogerDoger@test.com";
    const roger= new Employee("name", 1, email);
    expect(roger.getEmail()).toBe(email);
})

// get role method return Employee
test("get the role of an employee with the method",() => {
    const roger= new Employee();
    expect(roger.getRole()).toBe("Employee");
})

