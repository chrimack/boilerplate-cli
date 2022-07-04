// const fs = require('fs');
import fs from 'fs';

export const doesPathExist = (path) => {
  try {
    return fs.existsSync(path);
  } catch (error) {
    console.error(error);
  }
};
