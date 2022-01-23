// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      //Add this to the 'Title' section
      type: 'input',
      message: 'What is the title of your application?',
      name: 'title',
    },
    {
      //'Description' section
      type: 'input',
      message: 'Please type in a description for your application',
      name: 'description',
    },
    {
      //'Installation' section
      type: 'input',
      message: 'Please type in the installation instructions for your application',
      name: 'installation',
    },
    {
      //'Usage' section
      type: 'input',
      message: 'Please type in the usage information for your application',
      name: 'usage',
    },
    {
      //'Contributing' section
      type: 'input',
      message: 'Please type in the contribution guidelines for your application',
      name: 'contributing',
    },
    {
      //'Tests' section
      type: 'input',
      message: 'Please type in the test instructions for your application',
      name: 'tests',
    },
    {
      //'Licensing' section
      type: 'checkbox',
      message: 'What will the license be for your application?',
      choices:["Apache 2.0", "BSD-3", "BSD-2", "GNU GPL", "GNU LGPL", "MIT", "Mozilla Public License 2.0", "Common Development and Distribution", "Eclipse 2.0"],
      name: 'licensing',
    },
    {
      type: 'input',
      //Add to 'Questions' section with a link to profile
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
      //Add to 'Questions' section with instructions on how to reach user w/ questions
      type: 'input',
      message: 'What is your e-mail address?',
      name: 'email',
    },
  ]);
};

//Takes input and passing the values into README template
const generateReadMe = ({
  title,
  description,
  installation,
  usage,
  contributing,
  tests,
  licensing,
  username,
  email,
}) => `
# ${title}

## Licensing

![GitHub license](https://img.shields.io/badge/License-${licensing}-yellow.svg)

## Description
- ${description}

## Table of Contents
[How to install](#installation)
[How to use](#usage)
[How to contribute](#contributing)
[How to test](#tests)
[License](#licensing)

## How to install
- ${installation}

## How to use
- ${usage}

## How to contribute
- ${contributing}

## Testing
- ${tests}

## Questions
- Github: (https://github.com/${username})
- E-mail address: ${email}
`

const init = () => {
  promptUser()
  .then((response) => fs.writeFileSync('README.md', generateReadMe(response)))
  .then(() => console.log("It's working!"))
  .catch((err) => {
    throw err
  })
};

init();
// TODO: Create a function to write README file
// .then((response) => {
//   fs.writeFile('testReadMe.md', generateReadMe(response), (err)=>err ? console.log(err): console.log('yee!'))
// });

// const generateReadMe = (response) =>
// `# ${response.Title}
// # ${response.Description}
// # ${response.Installation}
// # ${response.Usage}
// # ${response.Contributing}
// # ${response.Tests}
// # ${response.Licensing}
// # ${response.username}
// `;

// .then((response) => {
//     fs.appendFile(`${response.title}.json`,`${response.title}\n ${response.description}\n ${response.installation}\n ${response.usage}\n ${response.contribution}\n ${response.test}\n`, (err) => err ? console.log(err) : console.log("Yeeee!"))
// });

// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();