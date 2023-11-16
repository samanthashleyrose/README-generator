const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

const questions = [
    {
        type: 'confirm',
        message: "Answer the following questions that are applicable to your project. If not applicable, type N/A or Not Applicable. Updates to your answers can be made after the README.md generates. Type Y to begin.",
        name: 'instructions',
    },
    {
        type: 'input',
        message: "What is the project's title?",
        name: 'title'
    },
    {
        type: 'input',
        message: "Briefly describe your project. Consider the following: Why did you make this project? What motivated you? What challenges did you face? What does this project accomplish or solve?",
        name: 'description'
    },
    {
        type: 'input',
        message: "If any, what are the installation steps?",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide instructions and examples on how to use your project. Be descriptive. Use examples. (Once README is generated, you may embed screenshots directly).",
        name: 'usage'
    },
    {
        type: 'input',
        message: "List any additional features here.",
        name: 'features'
    },
    {
        type: 'input',
        message: "List all information to be credited (i.e., collaborators, links, tutorials, etc.).",
        name: 'credits'
    },
    {
        type: 'input',
        message: "If you've written tests for you application, add them here with examples on how to run them.",
        name: 'tests',
    },
    {
        type: 'input',
        message: "List ways for other developers to contribute.",
        name: 'contributions'
    },
    {
        type: 'input',
        message: "Briefly list ways for users or other developers to ask questions. The next 4 prompts will be added as the contact information in this section.",
        name: 'questions'
    },
    {
        type: 'input',
        message: "What is your name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is your GitHub Username?",
        name: 'githubUser'
    },
    {
        type: 'input',
        message: "Enter the link to your GitHub Profile.",
        name: 'githubLink'
    },
    {
        type: 'input',
        message: "What is your email address?",
        name: 'email'
    },
    {
        type: 'list',
        message: "Select a license:",
        name: 'license',
        choices: [
            'MIT',
            'Node',
            'Not Applicable'
        ]
    },
];

// Function to initialize app
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

init();