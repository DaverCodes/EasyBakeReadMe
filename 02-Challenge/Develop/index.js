// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
function Question(name, message, type, choices) {
    this.name = name;
    this.message = message;
    this.type = type;
    this.choices = choices || [];
  }

  Question.prototype.ask = function () {
    return inquirer.prompt(this);
  };

  const questions = [
    new Question('title', 'write the project title', 'input'),
    new Question('author', "what is your name", 'input'),
    new Question('username', 'What your GitHub username?', 'input'),
    new Question('email', 'What is your email?', 'input'),
    new Question('year', 'enter the current year', 'input'),
    new Question('description', 'give a breif description of the project', 'input'),
    new Question('installation', 'what needs to be installed and how is it installed', 'input'),
    new Question('usage', 'what should the user see and how should they interact with it', 'input'),
    new Question('license', 'what license was used, if none write N/A', 'list', ['MIT', 'Apache 2.0', 'BSD 3', 'GNU GPL v3.0', 'N/A']),
    new Question('contribute', 'how can the user expect to help progress the project', 'input'),
    new Question('tests', 'how do you run a test', 'input'),
  ];

  Question.askAll = function () {
    return Promise.all(questions.map(question => question.ask()))
      .then(answers => Object.assign({}, ...answers));
  };


  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


];

// TODO: Create a function to write README file
function writeToFile( 'README.md', data) {}

// TODO: Create a function to initialize app
function init() {
    questions()
}

// Function call to initialize app
init();
