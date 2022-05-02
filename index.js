// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"what is your project title?",

    },
    {
        type:"input",
        name:"description",
        message:"Please describe your project.",
    },
    {
        type:"input",
        name:"instillation",
        message:"what is your instillation process?",
    },
    {
        type:"input",
        name:"usage",
        message:"how do you use this application?",
    },
    {
        type:"list",
        name:"license",
        message:"choose a license?",
        choices:["MIT", "ISC", "CIA", "FBI"]
    },
    {
        type:"input",
        name:"contributors",
        message:"list contributors",
    },
    {
        type:"input",
        name:"test",
        message:"what is the testing process?",
    },
    {
        type:"input",
        name:"email",
        message:"what is your email?",
    },
    {
        type:"input",
        name:"github",
        message:"what is your github repo name?",
    },
    {
        type:"input",
        name:"username",
        message:"what is your github username?",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then(function(data){
            //console.log(data)
            fs.writeFileSync("./disd/read.md",generateMarkdown(data))
        })

}

// Function call to initialize app
init();
