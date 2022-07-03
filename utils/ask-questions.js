const inquirer = require('inquirer');

const { setA, setB } = require('../constants/questions');

module.exports = async () => {
  const answersA = await inquirer.prompt(setA);
  let answersB = [];

  if (answersA.package) {
    answersB = await inquirer.prompt(setB);
  }

  return { ...answersA, ...answersB };
};
