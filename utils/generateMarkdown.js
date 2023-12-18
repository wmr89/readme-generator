// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 
  switch (license) {
    case "MIT":
     return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
   
    case "Apache":
      return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
      
    case "Creative Commons":
      let badgeCC = "![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)"
      fs.appendFile("README1.md", badgeCC, (err) => {
        if (err) {
            console.log('error')
        }
    })
    default:
      return ''
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if( license === 'None'){
    return '';
  }
  return ' - [License](#license)'
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if( license === 'None'){
    return '';
  }
  return `## License
  
  This repo is covered under ${license} license`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}
              
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  ${renderLicenseLink(data.license)}
  - [Questions](#questions)
 
          
  ## Installation
  ${data.install}
          
  ## Usage
  ${data.usage}
          
  ## Credits
  ${data.credits}
  
  ${renderLicenseSection(data.license)}

  ## Questions
  Check out my repos here: [Github](https://github.com/${data.githubId})

  you can email me at the following: [${data.email}](mailto:${data.email})
  
  
`;
}

module.exports = generateMarkdown;
