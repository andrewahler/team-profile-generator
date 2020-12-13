const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
// const render = require("./src/page-template.js");
const teamMembers = [];
const idArray = [];
function appMenu() {
    inquirer.prompt([
        {
            type: "list",
            name: "menu",
            message: "Create your Team",
            choices: ["Add Manager", "Add Engineer", "Add Intern", "Exit Application"]
        }
    ]).then(response => {
        switch (response.menu) {
            case "Add Manager":
                createManager();
                break;
            case "Add Engineer":
                createEngineer();
                break;
            case "Add Intern":
                createIntern();
                break;
            default:
                exitApp();
        }
    })
}


function createManager() {
    console.log("Please build your team");
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"Enter name"
        },
        {
            type:"input",
            name:"email",
            message:"Enter email"
        },
        {
            type:"input",
            name:"ID",
            message:"Enter ID"
        },
        {
            type:"input",
            name:"officenumber",
            message:"Enter office number"
        }
    ]).then(response=> {
        var teamManager = new Manager(response.name,response.ID,response.email,response.officenumber);
        managerArray.push(teamManager);
       // console.log(teamMembers)
        appMenu()
    })
}

function createIntern() {
    console.log("Please build your team");
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"Enter name"
        },
        {
            type:"input",
            name:"email",
            message:"Enter email"
        },
        {
            type:"input",
            name:"ID",
            message:"Enter ID"
        },
        {
            type:"input",
            name:"school",
            message:"Enter school"
        }
    ]).then(response=> {
        var intern = new Intern(response.name,response.ID,response.email,response.school);
        teamMembers.push(intern);
       // console.log(teamMembers)
        appMenu()
    })
}

function createEngineer() {
    console.log("Please build your team");
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"Enter name"
        },
        {
            type:"input",
            name:"email",
            message:"Enter email"
        },
        {
            type:"input",
            name:"ID",
            message:"Enter ID"
        },
        {
            type:"input",
            name:"github",
            message:"Enter github"
        }
    ]).then(response=> {
        var engineer = new Engineer(response.name,response.ID,response.email,response.github);
        teamMembers.push(engineer);
        //console.log(teamMembers)
        appMenu()
    })
}

function exitApp() {
    console.log(teamMembers);
    const openinhHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../assets/styles.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        <title>Team</title>
    </head>
    <body>
        <header>My Team</header>
        <div class="container">`

    const closingHTML = `   
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    </html>`

    var managerHTML = ""
    for(let i=0; i < managerArray.length;i++){
        managerHTML = `   <div class="card">
        <div class="card-title"><h4>${managerArray[i].name}</h4></div>
        <div class="card-body">
            <p>Email:${managerAray[i].email}</p>
            <p>Id: ${managerArray[i].ID}</p>
            <p>Name: ${managerArray[i].name}</p>
            <p>officenumber: ${managerArray[i].officenumber}</p>
        </div>
    </div>`
    }
}
 appMenu()
