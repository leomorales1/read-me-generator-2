// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## description
${data.description}

##### Table of Contents  
[instillation](#instillation)  
[usage](#usage) 
  
[usage](#usage)  
[Email](#email) 

## insitillation
${data.instillation}

## usage
${data.usage}

## license
${data.license}

## contributors
${data.contributors}

## test
${data.test}

## email
${data.email}

## github
${data.github}

## username
${data.username}
`;
}

module.exports = generateMarkdown;
