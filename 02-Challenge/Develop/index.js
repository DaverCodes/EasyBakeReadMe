// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')


// TODO: Create an array of questions for user input
const questions = [
    inquirer
  .prompt([
    /* Pass your questions in here */
    {type: "input",
    name: "title",
    message: "What is your project title"},

    {type: "input",
    name: "title",
    message: "What is your project title"},
    
    {type: "input",
    name: "title",
    message: "What is your project title"},

    {type: "input",
    name: "title",
    message: "What is your project title"},

    {type: "input",
    name: "title",
    message: "What is your project title"},

    {type: "input",
    name: "title",
    message: "What is your project title"},

    {type: "input",
    name: "title",
    message: "What is your project title"},

    {type: "input",
    name: "title",
    message: "What is your project title"},

    {type: "input",
    name: "title",
    message: "What is your project title"},

    {type: "input",
    name: "title",
    message: "What is your project title"},

    {type: "input",
    name: "title",
    message: "What is your project title"},


  ])
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
