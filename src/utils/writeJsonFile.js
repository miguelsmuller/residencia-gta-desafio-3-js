const { writeFile } = require('fs');
const path = require('path');

const writeJsonFile = (fileName, data) => {
  const fullPath = path.join(__dirname, `../../public_html/${fileName}`)

  writeFile(fullPath, data, (err) => {
    if (err) throw err;

    console.log(`Arquivo "${fileName}" criado com sucesso!`);
  });
};

module.exports = { writeJsonFile }
