const Engineer= require("../lib/Engineer.js");

test(" can create an instance of an engineer",() => {
    const roger= new Engineer();
    expect(typeof roger).toBe("object")
})

test("get the email of an employee with the method",() => {
    const github= "Roger123";
    const roger= new Engineer("name", 1, "email", github);
    expect(roger.getGithub()).toBe(github);
})
