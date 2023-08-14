const inquirer = require('inquirer');
const fs = require('fs');
let badge = "";

const generateReadme = (title, motivation, why, problem, learn, steps, instruction, screenshot, license, contributors, githubuser, githuburl, email) => {
return `

${title} 

<img src= "https://img.shields.io/badge/${badge}.svg" >

## Description
My Motivation: ${motivation} <br>
My Purpose: ${why} <br>
The Problem: ${problem}<br>
What I learned: ${learn}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)
- [Tests](#tests)

## Installation
The steps for using my project: ${steps}

## Usage
${instruction}<br>
<img src="${screenshot}" alt="Screenshot of Usage">

## Contributing
Contributors: ${contributors}

## License
${license}

## Questions
How to reach me with additional questions:
${githubuser}<br>
<a href = "${githuburl}">GitHub</a><br>
<a href = "mailto:${email}">Email</a>

## Tests
${test}
`
};

inquirer.prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What was your motivation?',
      name: 'motivation',
    },
    {
     type: 'input',
      message: 'Why did you build this project?',
      name: 'why',
    },
    {
        type: 'input',
         message: 'What problem does this project solve?',
         name: 'problem',
       },
       {
        type: 'input',
         message: 'What did you learn?',
         name: 'learn',
       },
       {
        type: 'input',
         message: 'What are the steps required to install your project?',
         name: 'steps',
       },
       {
        type: 'input',
         message: 'What are instructions for usage?',
         name: 'instruction',
       },
       {
        type: 'input',
         message: 'What is the URL for a usage screenshots?',
         name: 'screenshot',
       },
       {
        type: 'list',
         message: 'What licenses did you use?',
         name: 'license',
         choices: ["Apache License 2.0", "GNU", "MIT License", "BSD 2-Clause simplified", "BSD 3-Clause New or Revised", "Eclipse Public License", "Mozilla Public License", "The Unlicense"]
       },
       {
        type: 'input',
         message: 'List any contributors',
         name: 'contributors',
       },
       {
        type: 'input',
         message: 'What is your github user name?',
         name: 'githubuser',
       },
       {
        type: 'input',
         message: 'What is the URL to github repo for this project?',
         name: 'githuburl',
       },
       {
        type: 'input',
         message: 'What is your email address?',
         name: 'email',
       },
       {
        type: 'input',
         message: 'What are the tests for your project?',
         name: 'test',
       }
])
.then((response) => {
  switch (response.license) {
    case "Apache License 2.0":
      badge = "License-Apache%202.0-blue"
      break;
    case "GNU":
      badge = "License-GPL%20v3-blue"
      break;
    case "MIT License":
      badge = "License-MIT-yellow"
      break; 
    case "BSD 2-Clause simplified":
      badge = "License-BSD%202--Clause-orange"
      break;
    case "BSD 3-Clause New or Revised":
      badge = "License-BSD%203--Clause-blue"
      break;
    case "Eclipse Public License":
      badge = "License-EPL%201.0-red"
      break;
    case "Mozilla Public License":
      badge = "License-MPL%202.0-brightgreen"
      break;
    case "The Unlicense":
      badge = license-Unlicense-blue
      break;
  }
  
  const readmeContent = generateReadme(
    response.title, 
    response.motivation,
    response.why,
    response.problem,
    response.learn,
    response.steps,
    response.instruction,
    response.screenshot,
    response.license,
    response.contributors,
    response.githubuser, 
    response.githuburl,
    response.email
  );

  fs.writeFile("Generatedreadme.md", readmeContent, (err) =>
  err ? console.error(err) : console.log ("Readme Built!"));
})

