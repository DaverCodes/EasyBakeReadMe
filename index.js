const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the name of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Please write a short description of your project:",
      name: "description",
    },
    {
      type: "list",
      message: "What kind of license should your project have?",
      name: "license",
      choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "Unlicense", "None"],
    },
    {
      type: "input",
      message: "What command should be run to install dependencies?",
      name: "installation",
      default: "npm install",
    },
    {
      type: "input",
      message: "What command should be run to run tests?",
      name: "tests",
      default: "npm test",
    },
    {
      type: "input",
      message: "What does the user need to know about using the repo?",
      name: "usage",
    },
    {
      type: "input",
      message: "What does the user need to know about contributing to the repo?",
      name: "contributing",
    },
  ]);
}

async function init() {
  try {
    const answers = await promptUser();
    const markdown = generateMarkdown(answers);
    await writeFileAsync("README.md", markdown);
    console.log("Successfully wrote to README.md");
  } catch (err) {
    console.log(err);
  }
}

init();
