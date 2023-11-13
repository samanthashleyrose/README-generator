// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the project's title",
        name: 'project title'
    },
    {
        type: 'input',
        message: "Describe your project",
        name: 'description'
    },
    {
        type: 'input',
        message: "If any, what are the installation steps?",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide instructions and examples on how to use your project. Be descritpive.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "List all information to be credited (i.e. collaboratos, links, tutorials, etc)",
        name: 'credits'
    },
    {
        type: 'checkbox',
        message: "Select a license",
        name: 'license',
        choices: [
            'MIT'
        ]
    },
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