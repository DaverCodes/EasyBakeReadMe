const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'N/A') {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  } else {
    return '';
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'N/A') {
    return `- [License](#license)`;
  } else {
    return '';
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'N/A') {
    return `## License

This project is licensed under the ${license} license.`;
  } else {
    return '';
  }
}

const inquirer = require('inquirer');

function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your project.'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions for your project?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How is your project intended to be used?'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can users contribute to your project?'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are the testing instructions for your project?'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license does your project use?',
      choices: ['MIT', 'GPLv3', 'Apache', 'BSD', 'N/A']
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    }
  ]);
}


// Create a function to write the README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, err => {
      if (err) {
        reject(err);
      } else {
        resolve('README.md');
      }
    });
  });
}

// Create a function to initialize the program
function init() {
  promptUser()
    .then(data => generateMarkdown(data, renderLicenseBadge, renderLicenseLink, renderLicenseSection))
    .then(readme => writeToFile('README.md', readme))
    .then(fileName => console.log(`Successfully wrote ${fileName}`))
    .catch(err => console.error(err));
}

// Call the init function to start the program
init();
