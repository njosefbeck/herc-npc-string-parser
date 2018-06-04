'use strict';
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const InputFile = require('../InputFile');

module.exports = async function getInputFiles() {
  const inputDirPath = path.join(process.cwd(), '/input');
  try {
    const fileNames = await readdir(inputDirPath);
    return fileNames.map(fileName => {
      const inputFile = Object.create(InputFile);
      inputFile.init(inputDirPath, fileName);
      return inputFile;
    });
  }
  catch (error) {
    throw error;
  }
};