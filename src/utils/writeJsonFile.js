const { writeFile } = require('fs');

const writeJsonFile = (fileName, data) => {
  writeFile(fileName, data, (err) => {
    if (err) throw err;

    console.log(`Arquivo "${fileName}" criado com sucesso!`);
  });
};

module.exports = { writeJsonFile }
