const fs = require('fs')
const inquirer = require("inquirer")
const markdown = require("./utils/markdown.js")
const gl = require('./utils/license.js')
const Choices = require('inquirer/lib/objects/choices')



let questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'How would you describe your project?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How would one go about installing your app?'
  },
  {
    type:'input',
    name:'usage',
    message:'How does one use your app for themself?'
  },
  {
    type:'input',
    name:'contributing',
    message:'What are the guidelines on others contributing to your project?'
  },
  {
    type:'input',
    name:'tests',
    message:'How does one test for errors in this app?'
  },
  {
    type:'input',
    name:'questions',
    message:'How does one reach you for questions about your app?'
  },
  {
    type:'input',
    name:'username',
    message:'Please enter your github username.'
  },
  {
    type:'input',
    name:'email',
    email:'Please enter your email.'
  },
  {
    type:'list',
    name:'license',
    message:'Which license would you like to use?',
    choices: ['The MIT License', 'Apache 2.0 License', 'Boost Software License 1.0', 'GNU GPL v3', 'Mozilla Public License 2.0']
  }

]

function writeToFile(fileName, data) {
  gl.writeLicenseFile(data.license)
  let readme = markdown(data)
  fs.writeFile(fileName, readme, (err) => { if (err) { console.log(err) } })
}

function init() {
  inquirer.prompt(questions)
    .then((res) => {
      writeToFile('./results/README.md', res)
    })
    .catch((err) => {
      console.error(err)
    })
}

init();