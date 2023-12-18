// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Provide the steps required for installation?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter any credits',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'Enter your git hub id',
        name: 'githubId',
    },
    {
        type: 'input',
        message: 'Enter your email',
        name: 'email',
    },
    {
        type: 'list',
        message: 'What License are you using',
        name: 'license',
        choices: ['MIT', "Apache",  "Creative Commons", "None"]
    }
];

// TODO: Create a function to write README file
const writeToFile = function (fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log('error')
        }
    })
}


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions).then((answers) => {
            writeToFile('README.md', generateMarkdown(answers))
        })
}


// Function call to initialize app
init();
