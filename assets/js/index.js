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
        message: "Breifly describe your project. Consider the following: Why did you make this project? What motivated you? What challenges did you face? What does this project accomplish or solve?",
        name: 'description'
    },
    {
        type: 'input',
        message: "If any, what are the installation steps?",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide instructions and examples on how to use your project. Be descritpive. Use examples. (Once README is generated, you may embed screenshots directly).",
        name: 'usage'
    },
    {
        type: 'input',
        message: "List any additional features here.",
        name: 'features'
    },
    {
        type: 'input',
        message: "List all information to be credited (i.e. collaborators, links, tutorials, etc).",
        name: 'credits'
    },
    {
        type: 'input',
        message: "List ways for other developers to contribute.",
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

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        console.log(response);
        fs.writeFile('README.md', generateMarkdown(response), (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('README has been generated');
            }
        });
    });
};

// Function call to initialize app
init();