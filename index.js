// TODO: Include packages needed for this application
let fs = require('fs');
let inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is step 1 of installation?(if none, enter na)',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter any credits',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'What License are you using',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter your git hub id',
        name: 'githubId',
    },
    {
        type: 'input',
        message: 'Enter your git hub url',
        name: 'githubUrl',
    },
    {
        type: 'input',
        message: 'Enter your email',
        name: 'email',
    },
];

let writeReadMe = function (answers) {
    return
    `# ${answers.title}
    
    ##Description
    ${answers.description}
    
    ##Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)

    ## Installation
    ${answers.install}

    ##Usage
    ${answers.usage}

    ##Credits
    ${answers.credits}

    ##License
    ${answers.license}

    ##Questions
    [Github-${answers.githubId}](${answers.githubUrl})
    [Email-${answers.email}](${answers.email})

`

}

// TODO: Create a function to write README file
let writeToFile = function () {
    fs.writeFile('README.md', readMe, err)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions).then((answers) => {
            const readMe =
                `# ${answers.title}
            
            ##Description
            ${answers.description}
            
            ##Table of Contents
            - [Installation](#installation)
            - [Usage](#usage)
            - [Credits](#credits)
            - [License](#license)
        
            ## Installation
            ${answers.install}
        
            ##Usage
            ${answers.usage}
        
            ##Credits
            ${answers.credits}
        
            ##License
            ${answers.license}
        
            ##Questions
            [Github-${answers.githubId}](${answers.githubUrl})
            [Email-${answers.email}](${answers.email})
        
        `
        
        fs.writeFile('README1.md', readMe, (err) => {
            if (err) {
                console.log('error')
            }
        }
    
        )
})
}


// Function call to initialize app
init(

);
