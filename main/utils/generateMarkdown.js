// a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  let licenseURL;

  switch (license) {
    case 'MIT':
      licenseURL = 'https://opensource.org/licenses/MIT';
      break;
    case 'Apache 2.0':
      licenseURL = 'https://www.apache.org/licenses/LICENSE-2.0';
      break;
    case 'GPL 3.0':
      licenseURL = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    default:
      licenseURL = '';
      break;
  }

  return licenseURL;
}


// a function that returns the license link
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  const licenseLink = renderLicenseLink(license);
  const licenseSection = `## License

This project is licensed under the [${license}](${licenseLink}) license.`;

  return licenseSection;
}


// a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  let badgeURL;

  switch (license) {
    case 'MIT':
      badgeURL = 'https://img.shields.io/badge/License-MIT-yellow.svg';
      break;
    case 'Apache 2.0':
      badgeURL = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
      break;
    case 'GPL 3.0':
      badgeURL = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
      break;
    default:
      badgeURL = '';
      break;
  }

  return `![License](${badgeURL})`;
}


// generates markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

`;
}


module.exports = generateMarkdown;
