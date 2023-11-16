// Function that returns the selected license information and the appropriate badge -- If there is no license, return an empty string
function renderLicense(license) {
  if (license === 'MIT') {
    return `This project is licensed under the [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) - see the [LICENSE.md](LICENSE.md) file for details.`;

  } else if (license === 'Node') {
    return `This project is licensed under the [![License: Node](https://img.shields.io/badge/License-Node-green.svg)](https://opensource.org/licenses/Node) - see the [LICENSE.md](LICENSE.md) file for details.`;

  } else if (license === 'Not Applicable'){
    return '';

  } else {
    return '';
  };
};

// Function that ONLY returns the license badge 
function renderLicenseBadge(license) {
  if (license === 'MIT') {

    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  } else if (license === 'Node') {
    return `[![License: Node](https://img.shields.io/badge/License-Node-green.svg)]`;
  } else if (license === 'Not Applicable'){
    return '';
  } else {
    return '';
  }
}

// Function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}   

  ## Description
  ${renderLicenseBadge(response.license)}

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

  ${response.name}'s GitHub Profile: <a href="${response.githubLink}">${response.githubUser}</a>
  ${response.name}'s Email: <a href="${response.email}">${response.email}</a>

  ## License
  
  ${renderLicense(response.license)}
`;
}

module.exports = generateMarkdown;