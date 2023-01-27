// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  license.forEach(element => {
    if (license ==="MIT"){

    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"; 
    
    }else if(license ==="Appache 2.0")
  {
    return "![license](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"; 
  } else if(license ==="Mozilla"){
    return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)"
}else{
  return "";
}
});
}

  
  

  


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  license.forEach(element => {
    
  
  if (license ==="MIT"){

    return "(https://opensource.org/licenses/MIT)"
    
    }else if(license ===" Appache 2.0")
  {
    return "(https://opensource.org/licenses/Apache-2.0)"; 
  } else if(license ==="Mozilla"){
    return "(https://opensource.org/licenses/MPL-2.0)"
  }else {
    return "";
  }});
  }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` # ${data.Title}  
  ${renderLicenseBadge(data.License)}
  \n\n ## Table of Contents\n 
  -[Description](#Description)\n 
  -[Installation](#Installation)\n 
  -[Usage](#Usage)\n
  -[Contributes](#Contributes)\n
  -[Test](#Test)\n
  -[Questions](#Questions)\n\n
  ## Desciption\n ${data.Description}\n\n 
  ## Installation \n${data.Installation}
  ## Usage \n ${data.Usage}\n\n 
  ## License\n renderLicenseLing(${data.License})
  ## Contributes\n ${data.Contribute}\n\n
  ## Test\n ${data.Test}\n\n
  ## Questions \n ${data.Questions}\n 
  [GitHub](${data.gitHubProfile})\n
  [Contact Me](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
