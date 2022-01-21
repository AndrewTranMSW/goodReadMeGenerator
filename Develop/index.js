// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your README?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please type in a description for your application',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please type in the installation instructions for your application',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Please type in the usage information for your application',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Please type in the contribution guidelines for your application',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'Please type in the test instructions for your application',
      name: 'test',
    },
  ])

// TODO: Create a function to write README file
.then((response) => {
    fs.appendFile(`${response.title}.json`,`${response.title}\n ${response.description}\n ${response.installation}\n ${response.usage}\n ${response.contribution}\n ${response.test}\n`, (err) => err ? console.log(err) : console.log("Yeeee!"))
});
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();