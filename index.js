const Manager = require ("./lib/Manager")
const Intern = require ("./lib/Intern")
const Engineer = require ("./lib/Engineer")

const inquirer = require ("inquirer")
const path = require ("path")
const fs = require ("fs")

const DIST_DIR = path.resolve(__dirname, "dist")
const distPath = path.join(DIST_DIR, "index.html")

const render = require ("./src/template.js")
const myTeam = []
const teamIds = []

function teamMenu() {
function createManager() {
    console.log("build your team")
    inquirer.prompt([
        {
            type:"input",
            name: "managerName",
            message: "What's your team managers name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What's the managers ID?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What's the managers email?"
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What's the managers office number?"
        }
    ]).then((answers) =>{
        const manager = new Manager(
            answers.managerName,
            answers.managerId,
            answers.managerEmail,
            answers.managerOfficeNumber
        )

        myTeam.push(manager)
        teamIds.push(answers.managerId)
        createTeam()
    })
}

function createTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "What type of team member would you like to add to your team?",
            choices: ["Engineer", "Intern", "None"]
        }
    ]).then((userChoice) =>{
        switch(userChoice.memberChoice) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default: 
            buildEmployees()
        }
    })
}
    function addEngineer() {}

    
    function addIntern() {}
    function buildEmployees() {
        if(!fs.existsSync(DIST_DIR)){
            fs.mkdirSync(DIST_DIR)
        }
        fs.writeFileSync(distPath, render(myTeam), "utf-8")
    }
    createManager()
}

teamMenu()