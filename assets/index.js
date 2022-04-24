const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js");

//Create an array of questions for user input (minus license)
const questions = [
  "What is the title of your project?",
  "Write a description for your project.",
  "What are the installation instructions for your project?",
  "Give us some information about the proper usage of your project.",
  "Do you have any contribution guidelines?",
  "Please enter any test instructions for your project.",
  "Please enter your GitHub username.",
  "What is your email address?",
  "What is your full name?",
];

//An array of the names associated with each question for use with template literals.
const name = [
  "title",
  "description",
  "installation",
  "usage",
  "contributing",
  "tests",
  "github",
  "email",
  "fullname",
];

//Creating an empty question array that will be filled with the questions and their respective names for the inquirer prompts.
const questionArr = [];

for (let i = 0; i < questions.length; i++) {
  questionArr.push({
    type: "input",
    name: name[i],
    message: questions[i],
  });
}

// Function to initialize the prompts
// Also adds on the license question, which could not be added using the previous iteration because it has a different prompt type.
function init() {
  inquirer
    .prompt([
      ...questionArr,
      {
        type: "list",
        name: "license",
        message: "Which license would you like to include, if any?",
        choices: [
          "MIT",
          "BSD 2-Clause",
          "BSD 3-Clause",
          "The Unlicense",
          "None",
        ],
      },
    ])
    //Generates the new README.md file
    .then(function (data) {
      fs.writeFile("ReadMe.md", generateMarkdown(data), function (err) {
        err ? console.error(err) : console.log("Success");
      });
    });
}

//Initializing the prompts
init();
