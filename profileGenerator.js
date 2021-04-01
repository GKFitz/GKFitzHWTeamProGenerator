// this will have the HTML temmplate for the cards 
// and then a forloop to go through theteamArray.
const fs = require('fs');

function profileGenerator(teamArray){
    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!--- FontAwesome ---->
        <script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script>
        <title> My Team</title>
        <style>
            body{
                margin:0;
                text-align: center;
                font-family: sans-serif;

            }
            h1{
                background-color: teal;
                color:white;
                padding: 40px;

            }
            h2{
                background-color: lightskyblue;
            }
            div{
                display: inline-block;
                width: 200px;
                margin: 10px;
                padding: 10px;
                border: 1px solid black;
                 
            }
        </style>
        
    </head>
    <body>
        <h1>The Team</h1> 
        `;
        //should creat a div for each employee of the object
        for(let employee of teamArray){
            //prefer the html += to create html elements using the template literals
            html+= `<div>
            <h2>${employee.getName()}</h2>
            <h3>${employee.getRole()}</h3>
            <p>id: ${employee.getId()}</p>
            <p>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>`;
                //this conditional will make sure the that the different items go to the right role
                if(employee.getRole() === "Manager") {
                    html+= `<p>Office number: ${employee.getOfficeNumber()}</p>`;
                }else if(employee.getRole() === "Engineer"){
                    html+= `<p>Github: <a href="${employee.getGithub()}"> ${employee.getGithub()}</a></p>`;

                }else if(employee.getRole() === "Intern") {
                    html+= `<p>School: ${employee.getSchool()}</p>`;
                };


            html+= `
            
            </div>`;
        }
        html += `
    </body>
    </html>`;
    console.log(html)
    //this will write the html file and will generate it in the dist file
    fs.writeFileSync("./dist/team.html", html);

}


module.exports = profileGenerator
