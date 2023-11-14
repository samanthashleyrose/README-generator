// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the project's title",
        name: 'title'
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
        message: "List any additional features here.",
        name: 'features'
    },
    {
        type: 'input',
        message: "List all information to be credited (i.e. collaboratos, links, tutorials, etc)",
        name: 'credits'
    },
    {
        type: 'input',
        message: "List how to contribute here.",
        name: 'contributions'
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
    .then((response) => {
        console.log(response);
        fs.writeFile('README.md', generateMarkdown(response));
        console.log('README has been generated');
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();