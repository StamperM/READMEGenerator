// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


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
    type: 'input',
    message: 'What is needed for installation?',
    name: 'Installation',
  },
  {
    type: 'input',
    message: 'Add any instructions or Examples',
    name: 'Usage',
  },
  {
    type:"list",
    message: "Which liscense do you need to include",
    choices:["MIT","Appache 2.0","Mozilla"],
    name:"License",
},
 {
    type:"input",
    message:"List the people who assited and add a comma between each contributor.",
    name:"Contribute",
},

  {      
     type:"input",
     message:"Do you want to provide test?",
     name: "Test"
      },
  {
      type:"input",
      message:"Instructions on contacting",
      name:"Questions"
  },
  {
    type:"input",
    message:"gitHub Profile",
    name:"gitHubProfile"
},

{
  type:"input",
  message:"GitHub email",
  name:"email"
},

]

inquirer
.prompt(questions)
.then(answers =>{
 
  fs.writeFile('README.md',generateMarkdown(answers), function(err){
    if (err) throw err;
  console.log("saved")
  
      })
    })

// TODO: Create a function to initialize app

function init() {};

// Function call to initialize app
init();
