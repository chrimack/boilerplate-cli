const fs = require('fs');

module.exports = (path) => {
  try {
    return fs.existsSync(path);
  } catch (error) {
    console.error(error);
  }
};
