// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the project's title",
        name: 'title'
    }
];

inquirer
    .prompt(questions)
    .then((response) =>
        response.confirm === response.README
    );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();