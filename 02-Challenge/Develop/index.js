// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')


// TODO: Create an array of questions for user input
function ReadMeBuilder{
    questions(type, name, message){
    this.type = type;
    this.name = name;
    this.message = message;
    }
    printMetaData() {
        //something about printing to readme.md

    }
    
}

const questions = [
    inquirer
  .prompt([
    new questions()
    new questions()
    new questions()
    new questions()
    new questions()
    new questions()
    new questions()
    new questions()
    new questions()
    new questions()
    new questions()




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
