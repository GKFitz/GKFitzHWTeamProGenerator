const Manager= require("../lib/Manager.js");


test(" can create an instance of an manager",() => {
    const roger= new Manager();
    expect(typeof roger).toBe("object")
})

test("get the office number of an manager employee with the method",() => {
    const officeNumber= 10;
    const roger= new Manager("name", 1, "email", officeNumber);
    expect(roger.getOfficeNumber()).toBe(officeNumber);
})