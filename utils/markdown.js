const gl =  require('./license')

function generateMarkdown(data) {
  let license = gl.getLicense(data.license)
  let readme = `
${license.badge}
# ${data.title}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
${license.badge}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
${data.questions}
Github Profile: https://github.com/${data.username}
Email: ${data.email}
`
  return readme
}

module.exports = generateMarkdown;