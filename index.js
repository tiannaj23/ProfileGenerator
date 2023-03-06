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

}

teamMenu(
)