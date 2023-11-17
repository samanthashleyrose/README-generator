// Function that returns the selected license information -- If there is no license, return an empty string
function renderLicense(license) {

  if (license === 'Apache License 2.0') {
    return `This project is licensed under the <a href="https://opensource.org/licenses/Apache-2.0">Apache License 2.0</a> - see the [LICENSE](insert path for License file) file for details.`;

  } else if (license === 'MIT License') {
    return `This project is licensed under the <a href="https://opensource.org/licenses/MIT">MIT LICENSE</a> - see the [LICENSE](insert path for License file) file for details.`;

  } else if (license === 'Eclipse Public License 2.0') {
    return `This project is licensed under the <a href="https://opensource.org/licenses/EPL-2.0">Eclipse Public License 2.0</a> - see the [LICENSE](insert path for License file) file for details.`;

  } else if (license === 'Mozilla Public License 2.0') {
    return `This project is licensed under the <a href="https://opensource.org/licenses/MPL-2.0">Mozilla Public License 2.0</a> - see the [LICENSE](insert path for License file) file for details. `; 

  } else if (license === 'The Unlicense') {
    return `This project is licensed under the <a href="https://spdx.org/licenses/Unlicense.html">The Unlicense</a> - see the [LICENSE](insert path for License file) file for details.`;

  } else if (license === 'Not Applicable'){
    return '';

  } else {
    return '';
  };
};

// Function that ONLY returns the license badge 
function renderLicenseBadge(license) {
  if (license === 'Apache License 2.0') {
    return `![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;

  } else if (license === 'MIT License') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;

  } else if (license === 'Eclipse Public License 2.0') {
    return `![License: EPL-2.0](https://img.shields.io/badge/License-EPL%202.0-red.svg)`;

  } else if (license === 'Mozilla Public License 2.0') {
    return `![License: MPL-2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;

  } else if (license === 'The Unlicense') {
    return `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`;

  } else if (license === 'Not Applicable'){
    return '';

  } else {
    return '';
  }
}

// Function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}   
  ${renderLicenseBadge(response.license)}

  ## Description

  ${response.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Features](#features)
  - [Tests](#tests)
  - [How To Contribute](#how-to-contribute)
  - [Questions](#questions)
  - [License](#license)
  
  ## Installation
  
  ${response.installation}
  
  ## Usage
  
  ${response.usage}

  Optional -- embed screenshots here: ![alt text](assets/images/screenshot.png)
  
  ## Credits
  
  ${response.credits}
  
  ## Features
  
  ${response.features}

  ## Tests

  ${response.tests}
  
  ## How to Contribute
  
  ${response.contributions}

  ## Questions 
   
  ${response.questions}

  ${response.name}'s GitHub Profile: <a href="${response.githubLink}">${response.githubUser}</a><br>
  ${response.name}'s Email: <a href="${response.email}">${response.email}</a>

  ### Thank you for your interest and support!

  ## License
  
  ${renderLicense(response.license)}
`;
}

module.exports = generateMarkdown;