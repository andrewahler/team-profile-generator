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
        var temaManager = new Manager(response.name,response.id,response.email,response.officenumber);
        teamMembers.push(temaManager);
        console.log(teamMembers)
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
        var intern = new Intern(response.name,response.id,response.email,response.school);
        teamMembers.push(intern);
        console.log(teamMembers)
        appMenu()
    })
}

    function card(employee) {

        const name = employee.getname();
        const id = employee.getid();
        const email = employee.getEmail();
        const role = employee.getrole();
        const github = employee.getgithub();
    }