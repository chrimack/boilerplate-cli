// import prompt from 'inquirer/lib/ui/prompt';
import inquirer from 'inquirer';
import { setA, setB } from '../constants/questions.js';

export const askQuestions = async () => {
  try {
    const answersA = await inquirer.prompt(setA);
    let answersB = [];

    if (answersA.package) {
      answersB = await inquirer.prompt(setB);
    }

    return { ...answersA, ...answersB };
  } catch (error) {
    console.error(error);
  }
};
