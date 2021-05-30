// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of the project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe the project"
    },
    {
        type: "input",
        name: "install",
        message: "Explain how to install the project"
    },
    {
        type: "input",
        name: "usage",
        message: "Describe the usage of the project"
    },
    {
        type: "input",
        name: "contribute",
        message: "Describe the contribution guidelines"
    },
    {
        type: "input",
        name: "test",
        message: "Describe the test instructions"
    },
    {
        type: "list",
        message: "Choose a license for this project",
        choices: ["Apache", "Eclipse", "GNU", "IBM", "MIT", "Mozilla", "None"],
        name: 'license'
    },
    {
        type: "input",
        name: "username",
        message: "What is your Github username"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), 
        (err) => err ? console.error(err) : console.log("\nYour ReadMe has been created.")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => writeToFile("README.md", response));
}

// Function call to initialize app
init();
