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

const questionArr = [];

for (let i = 0; i < questions.length; i++) {
  questionArr.push({
    type: "input",
    name: name[i],
    message: questions[i],
  });
}

// Function to initialize the prompts
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
    .then(function (data) {
      fs.writeFile(
        "generatedReadMe.md",
        generateMarkdown(data),
        function (err) {
          err ? console.error(err) : console.log("Success");
        }
      );
    });
}

// inquirer.prompt(questionArr).then(function (data) {
//   fs.writeFile("generatedReadMe.md", content, function (err) {
//     err ? console.error(err) : console.log("Success");
//   });
// });

//Initializing the prompts
init();
