const choices = require('./choices');
const doesPathExist = require('../utils/does-path-exist');
const errorMessages = require('./error-messages');
const questionNames = require('./question-names');

const types = {
  confirm: 'confirm',
  input: 'input',
  list: 'list',
};

const project = {
  name: questionNames.projectName,
  type: types.input,
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
  name: questionNames.git,
  type: types.confirm,
  message: 'Initialize a git repository? (defaults to false)',
  default: false,
};

const package = {
  name: questionNames.package,
  type: types.confirm,
  message: 'Use a package manager? (defaults to false)',
  default: false,
};

const packageManager = {
  name: questionNames.packageManager,
  type: types.list,
  message: 'Choose a package manager (defaults to npm)',
  choices: Object.values(choices.packageManager),
  default: 'npm',
};

const installDependencies = {
  name: questionNames.dependencies,
  type: types.confirm,
  message: 'Install Dependencies (defaults to false)',
  default: false,
};

const bundler = {
  name: questionNames.bundler,
  type: types.list,
  message: 'Choose a bundler (defaults to webpack)',
  choices: Object.values(choices.bundler),
};

const typescript = {
  name: questionNames.typescript,
  type: types.confirm,
  message: 'Do you want to use typescript (defaults to false)',
  default: false,
};

const transpiler = {
  name: questionNames.transpiler,
  type: types.list,
  message: 'Choose a transpiler (defaults to babel)',
  choices: Object.values(choices.transpiler),
  default: 'babel',
};

module.exports = {
  setA: [project, git, bundler, typescript, transpiler, package],
  setB: [packageManager, installDependencies],
};
