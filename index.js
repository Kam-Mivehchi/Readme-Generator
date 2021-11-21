// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");


inquirer
.prompt([
    {
        name: "Title",
        type: "input",
        message: "Title:"
    },
    {
        name: "Description",
        type: "input",
        message: "Description:"
    },
    
    {
        name: "Install",
        type: "input",
        message: "Installation Instructions:"
    },
    {
        name: "Usage",
        type: "input",
        message: "How is it used:"
    },
    {
        name: "License",
        type: "list",
        choices: ['Public', 'Permissive', 'LGPL', 'Copyleft', 'Proprietary', 'MIT'],
        message: "License"
    },
    {
        name: "Contributing",
        type: "input",
        message: "How to contribute:"
    },
    {
        name: "Tests",
        type: "input",
        message: "Test Instructions:"
    },
    {
        name: "Email",
        type: "input",
        message: "Enter your email:"
    },
    {
        name: "Github",
        type: "input",
        message: "Github Link:"
    }
]) 

.then(({Title, Description, Install, Usage, License, Contributing, Tests, Email, Github})=> {
    const section1 = `# ${Title}\n\n`;
    const section2 = `## Description: \n ${Description} \n\n`;
    const section3 = `## Installation:\n ${Install} \n\n`;
    const section4 = `## Usage:\n ${Usage} \n\n`;
    const tableOfContents = `## Table of Contents:
+ [Installation](#installation)
+ [Usage](#usage)
+ [License](#license)
+ [Contributing](#contributing)
+ [Tests](#tests)
+ [Questions](#questions)

`
    const section5 = `## Tests:\n  ${Tests} \n\n`;
    const section6 = `## Liscense:\n  ${License} \n\n`;
    const section7 = `## Contributing: \n ${Contributing} \n\n`;
    const section8 = `## Questions: \n Please reach out to ${Github} or email ${Email}`;
    console.log(section1+section2+section3+section4+section5+section6+section7 +section8);
    const final = section1+section2+tableOfContents+section3+section4+section5+section6+section7+section8;
    fs.writeFile('./GoodReadMe.md', final, 'utf8', (err) => {
        if (err) throw err;
        console.log('Stored the new read me file')
        });
})

// TODO: Create an array of questions for user input
// TODO: Create a function to write README file


// TODO: Create a function to initialize app

