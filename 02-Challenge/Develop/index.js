
//this segment of code is needed to access npm packages that allow you to ask user questions and generate a file with them

const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

//below I have written a constructor for all 11 questions

function Question(name, message, type, choices) {
    this.name = name;
    this.message = message;
    this.type = type;
    this.choices = choices || [];
}

//this allows the answered questions to be read and brings the user to the next question

Question.prototype.ask = function () {
    return inquirer.prompt(this);
};

//below is the array of questions that is simplified by utilizing the constructor above, a whole line of code was required for the license question, this annoyed me more than it should have

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


//here is another method use that simplifies the consolidation of all the answeres given 

Question.askAll = function () {
    return Promise.all(questions.map(question => question.ask()))
    .then(answers => Object.assign({}, ...answers));
};


//this code exports the Question constructor so it can be used in other modules that require it.

module.exports = Question;

//now the readme file can finally be created, we take the module we just created and ask for it, get the array of answers, 
//and use markdown to create the README file

const Question = require('./Question');

Question.askAll()
.then(answers => {
    // Use the answers to generate the markdown file
    const markdown = generateMarkdown(answers);

    // Write the markdown file to disk
    return writeFile('README.md', markdown);
})

.then(() => console.log('README.md file generated successfully!'))
.catch(err => console.error(err));
