// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

  ## Description
  
  ${response.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Features](#features)
  - [How To Contribute](#how-to-contribute)
  - [License](#license)
  
  ## Installation
  
  ${response.installation}
  
  ## Usage
  
  ${response.usage}

  OPTIONAL -- embed screenshots here: ![alt text](assets/images/screenshot.png)
  
  ## Credits
  
  ${response.credits}
  
  ## Features
  
  ${response.features}
  
  ## How to Contribute
  
  ${response.contributions}

  ## License
  
  ${response.license}
`;
}

module.exports = generateMarkdown;