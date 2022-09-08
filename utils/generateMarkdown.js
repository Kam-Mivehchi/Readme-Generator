// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch (license) {
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";

    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";

    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

    default:
      return "";
  }
}



// function that takes an object and generates a string with the object keys
function generateMarkdown(data) {

  return (
    `# ${data.title}

## Desciption
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [Contributions](#contributions)
- [Contact](#contact)

## Installation
${data.install}
    
## Usage
${data.usage}

## Contributions
${data.contributing}

## Tests
${data.tests}

## License
${renderLicenseBadge(data.license)}

## Contact
- Email: [${data.email}](mailto:${data.email})
- Github: [github.com/${data.github}](https://github.com/${data.github})
- Linkedin: [linkedin.com/in/${data.linkedin}](https://linkedin.com/in/${data.linkedin})
- Portfolio: [${data.portfolio}](https://${data.portfolio})
    `
  )
}

module.exports = generateMarkdown;
