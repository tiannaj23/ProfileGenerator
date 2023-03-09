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
            message: "What's the managers employee ID#?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What's the managers email address?"
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
    function createEngineer() {}
    inquirer.prompt([
        {
            type:"input",
            name: "engineerName",
            message: "What's your engineer's name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What's the engineer's employeed ID#?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What's the engineer's email address?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What's the managers engineer's GitHub username?"
        }

    ]).then((answers) =>{
        const engineer = new Engineer(
            answers.engineerName,
            answers.engineerId,
            answers.engineerEmail,
            answers.engineerGitHub
        )

        myTeam.push(engineer)
        teamIds.push(answers.engineerId)
        createTeam()
    })
}

    function createIntern() {}
    inquirer.prompt([
        {
            type:"input",
            name: "internName",
            message: "What's your intern's name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What's the intern's employee ID#?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What's the intern's email address?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What school does the intern attend"
        }

    ]).then((answers) =>{
        const intern = new Intern(
            answers.internName,
            answers.internId,
            answers.internEmail,
            answers.internSchool
        )

        myTeam.push(intern)
        teamIds.push(answers.internId)
        createTeam()
    })
    function buildEmployees() {
        if(!fs.existsSync(DIST_DIR)){
            fs.mkdirSync(DIST_DIR)
        }
        fs.writeFileSync(distPath, render(myTeam), "utf-8")
    }
    createTeam()

teamMenu()