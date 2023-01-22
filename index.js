// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
inquirer
.createPromptModule(questions)
.then(response)=>
// TODO: Create an array of questions for user input
const questions = [ 
    {
      type: 'input',
      message: 'What is your Projects Title?',
      name: 'Title',
    },
    {
        type: "input",
        message:"Please provide a short description. What problem is beign solve, why did you build this, what did you gain? ",
        name:"Description",

    },
    {
        type:"confirm",
        message:"Is a table of contents needed?",
        name:"TableOfContents",
    },
    {
      type: 'input',
      message: 'What is needed for installation?',
      name: 'Installation',
    },
    {
      type: 'confirm',
      message: 'Do you have instructions or Example to show?',
      name: 'Usage',
    },
    {
        type:"confirm",
        message:"Do you need to add collaborators?",
        name: "Credits"
    },
    {
        type:"checkbox",
        message: "Which liscense do you need to include",
        choices:["MIT","Microsoft Public License","Eclipse Public License 2.0","Mozilla Public License 2.0","Open Software License 3.0"],
        name:"License",
    },
    {
        type:"confirm",
        message:"How to contribute?",
        name:"Contribute",
    },
    {
            type:"confirm",
            message:"Do you want to provide test?",
            name: "Test"
        },
    {
        type:"confirm",
        message:"Do you want to provide a questions section?",
        name:"Questions"
    },

  ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
