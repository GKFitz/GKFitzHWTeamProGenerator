const Intern= require("../lib/Intern.js");

test(" can create an instance of an engineer",() => {
    const roger= new Intern();
    expect(typeof roger).toBe("object")
})

test("get the email of an employee with the method",() => {
    const school= "Columbia";
    const roger= new Intern("name", 1, "email", school);
    expect(roger.getSchool()).toBe(school);
})
