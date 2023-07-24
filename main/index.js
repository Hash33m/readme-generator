// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// array of questions needed for user input
const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: 'What is the name of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do users install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for how to use your project:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to your project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How do you run tests for your project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None'],
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];


// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README file generated successfully!');
    }
  });
}

// a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Generate the README content
      const readmeContent = `
# ${answers.projectName}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Contact](#contact)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
${answers.license === 'None' ? 'No license' : answers.license}

## Contact
GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
Email: ${answers.email}
`;

      // Call the function to write the README file
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.error(error);
    });
}


// Function call to initialize app
init();
