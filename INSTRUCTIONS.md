### ASSIGNMENT INSTRUCTIONS FROM UCONN'S CODING BOOTCAMP

### Node.js Challenge: Professional README Generator
When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions—this last part increases the likelihood that other developers will contribute to the success of the project.

You can quickly and easily generate a README file by using a command-line application to generate one. This allows the project creator to devote more time working on the project.

Your task is to create a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package. Review the Professional README Guide as a reminder of everything that a high-quality, professional README should contain.

**IMPORTANT**<br>
In order to install inquirer, please use `npm i inquirer@8.2.4.`

The application will be invoked by using the following command:`node index.js`<br>
Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality.

**IMPORTANT**<br>
Make sure to clone the starter code repository and make your own repository with the starter code. Do not fork the starter code repository!

Before you start, clone the starter codeLinks to an external site..

**User Story** <br>
`AS A developer`<br>
`I WANT a README generator`<br>
`SO THAT I can quickly create a professional README for a new project`<br>

**Acceptance Criteria**<br>
`GIVEN a command-line application that accepts user input`<br>
`WHEN I am prompted for information about my application repository`<br>
`THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions`<br>
`WHEN I enter my project title`<br>
`THEN this is displayed as the title of the README`<br>
`WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions`<br>
`THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests`<br>
`WHEN I choose a license for my application from a list of options`<br>
`THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under`<br>
`WHEN I enter my GitHub username`<br>
`THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile`<br>
`WHEN I enter my email address`<br>
`THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions`<br>
`WHEN I click on the links in the Table of Contents`<br>
`THEN I am taken to the corresponding section of the README`<br>
