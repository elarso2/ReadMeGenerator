const inquirer = require("inquirer");
const fs = require("fs");

//Asking user questions for ReadMe content

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is your project's description?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are your installation instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "Give us some information about the proper usage of your project.",
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like to include?",
    choices: ["mit"],
  },
  {
    type: "input",
    name: "contibuting",
    message: "Do you have any contribution guidelines?",
  },
  {
    type: "input",
    name: "tests",
    message: "Please enter any test instructions for your project.",
  },
  {
    type: "input",
    name: "github",
    message:
      "Please enter your GitHub profile name so a link to your GitHub can be generated.",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  //Maybe don't need this final input?
  {
    type: "input",
    name: "contactInstructions",
    message: "Please enter any instructions about how to contact you.",
  },
];

inquirer.prompt(questions).then(function (data) {
  console.log(data);
});
