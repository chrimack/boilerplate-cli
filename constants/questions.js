const path = require('path');

const choices = require('./choices');
const doesPathExist = require('../utils/does-path-exist');
const errorMessages = require('./error-messages');

const project = {
  name: 'project-name',
  type: 'input',
  message: 'Project name: ',
  validate: (input) => {
    let valid = true;

    // Reg ex to ensure that project name
    // starts with a letter,
    // only includes letters, numbers, underscores and hashes
    const regex = /^[a-z](?:_?[a-z0-9\-\_\d]+)*$/i;

    if (regex.test(input)) {
      valid = valid && true;
    } else {
      return errorMessages.invalidProjectName;
    }

    const directoryPath = `${process.cwd()}/${input}`;

    if (doesPathExist(directoryPath)) {
      return errorMessages.projectAlreadyExists(input);
    } else {
      return valid && true;
    }
  },
};

const git = {
  name: 'git',
  type: 'confirm',
  message: 'Initialize a git repository? (defaults to false)',
  default: false,
};

const package = {
  name: 'package',
  type: 'confirm',
  message: 'Use a package manager? (defaults to false)',
  default: false,
};

const packageManager = {
  name: 'package-manager',
  type: 'list',
  message: 'Choose a package manager (defaults to npm)',
  choices: Object.values(choices.packageManager),
  default: 'npm',
};

const installDependencies = {
  name: 'install',
  type: 'confirm',
  message: 'Install Dependencies (defaults to false)',
  default: false,
};

const bundler = {
  name: 'bundler',
  type: 'list',
  message: 'Choose a bundler (defaults to webpack)',
  choices: Object.values(choices.bundler),
};

const typescript = {
  name: 'typescript',
  type: 'confirm',
  message: 'Do you want to use typescript (defaults to false)',
  default: false,
};

const transpiler = {
  name: 'transpiler',
  type: 'list',
  message: 'Choose a transpiler (defaults to babel)',
  choices: Object.values(choices.transpiler),
  default: 'babel',
};
