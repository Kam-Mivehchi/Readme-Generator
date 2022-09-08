// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const { join } = require("path");
const questions = [
    {
        name: "title",
        type: "input",
        message: "Title:"
    },
    {
        name: "description",
        type: "input",
        message: "Description:"
    },

    {
        name: "install",
        type: "input",
        message: "Installation Instructions:"
    },
    {
        name: "usage",
        type: "input",
        message: "How is it used:"
    },
    {
        name: "license",
        type: "list",
        choices: ['Mozilla Public License 2.0', 'ISC', 'Apache 2.0', 'MIT'],
        message: "License"
    },
    {
        name: "contributing",
        type: "input",
        message: "How to contribute:"
    },
    {
        name: "tests",
        type: "input",
        message: "Test Instructions:"
    },
    {
        name: "email",
        type: "input",
        message: "Enter your email:"
    },
    {
        name: "github",
        type: "input",
        message: "Enter your Github username (**USERNAME ONLY** Do not include 'https://www.github.com/':"
    },
    {
        name: "linkedin",
        type: "input",
        message: "Enter your Linkedin user name (**USER NAME ONLY** Do not include 'https://www.linkedin.com/in/':"
    },
    {
        name: "portfolio",
        type: "input",
        message: "What is your Portfolio URL (Do not include 'https://www.'"
    }
]
//generates a markdown file with the input content
function createFile(content) {
    fs.writeFile('./Example.md', content, 'utf8', (err) => {
        if (err) throw err;
        console.log('Stored the new read me file')
    });
}

//initialize application
function init() {
    inquirer.prompt(questions)
        .then(answers => generateMarkdown(answers))
        .then((content) => createFile(content))
        .catch(err => console.error(err));
}
init()

