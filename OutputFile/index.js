'use strict';
const fs = require('fs');
const readline = require('readline');
const groupDuplicates = require('../scripts/groupDuplicates');
const Line = require('../Line');

module.exports = {
  build(inputFile) {
    const rl = readline.createInterface({
      input: fs.createReadStream(inputFile.filePath),
      crlfDelay: Infinity,
    });

    let lineNumber = 1;
    let lines = [];

    rl.on('line', (txtLine) => {
      let line = Object.create(Line);
      line.create(inputFile, txtLine, lineNumber);

      if (Object.keys(line).length) {
        lines.push(line);
      }

      lineNumber++;
    });

    rl.on('close', () => {
      const reduced = lines.reduce(groupDuplicates, []);
      const outputFilePath = `${process.cwd()}/output/${inputFile.outputFileName}`;
      const outputFileData = { lines: reduced };

      fs.writeFile(outputFilePath, JSON.stringify(outputFileData, null, 2), (err) => {
        if (err) throw err;
        console.log(`File: ${inputFile.outputFileName} has been saved.`);
      });

      console.log(`Saving ${inputFile.outputFileName}...`)
    });
  }
};