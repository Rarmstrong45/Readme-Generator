function init () {

  const inquirer = require('inquirer');
  const fs = require('fs'); 
  const generate = require('./utils/generateMarkdown.js');
  const path = require('path');
  
  inquirer
    .prompt([
      { 
        type: "input",
        name: "title", 
        message: "What is a good Title for your project?",
           },
      { 
        type: "input",
        name: "description",
        message: "What is a good Description of your project?",  
           },
      {
         type: "input",
         name: "installation",
         message: "How do you Install your application?",
      },
      {
          type: "input",
          name: "usage",
          message: "How do you Use your application?",
      },
      {
          type: "checkbox",
          name: "license",
          message: "What License did you use for this repository?",
          choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0"],
      },
      {
          type: "input",
          name: "contributing",
          message: "How can people Contribute to your project?",
      },
     {
          type: "input",
          name: "tests",
          message: "How do people update the tests for your project?",
      },
      {
          type: "input",
          name: "github",
          message: "please provide your full github link?",
      },
      {
          type: "input",
          name: "email",
          message: "What is your email address?",
      },
    ])
    .then((questionsInfo) => {
      return fs.writeFileSync(path.join (process.cwd(), "README.md"), generate(questionsInfo));
    });
  }
  
  init();
  