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
        <title> My Team</title>
        
    </head>
    <body>
        <h1>The Team</h1> 
        `;
        //should creat a div for each part of the object
        for(let employee of teamArray){
            html+= `<div>
            <h2>${employee.getName()}</h2>
            <h3>${employee.getRole()}</h3>
            <p>id: ${employee.getId()}</p>
        
            
            </div>`;
        }
        html += `
    </body>
    </html>`;
   

}






module.exports = profileGenerator
