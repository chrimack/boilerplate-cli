import { askQuestions } from './utils/ask-questions.js';
// import error from './utils/error';

const cli = async () => {
  const options = await askQuestions();
  console.log(options);
};

export { cli };
