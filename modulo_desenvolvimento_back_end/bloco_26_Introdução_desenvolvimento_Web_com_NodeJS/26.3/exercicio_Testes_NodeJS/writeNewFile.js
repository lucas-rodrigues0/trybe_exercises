const fs = require('fs/promises');

async function writeNewFile(fileName, fileContent) {
  try {
    await fs.writeFile(`${fileName}`, `${fileContent}`);
    return 'ok';
  } catch {
    return 'não foi possível concluir';
  }
};

module.exports = writeNewFile;
