'use strict';
const OutputFile = require('./OutputFile');
const getInputFiles = require('./scripts/getInputFiles');

async function start() {
  try {
    const inputFiles = await getInputFiles();
    inputFiles.forEach(inputFile => OutputFile.build(inputFile));
  }
  catch (error) {
    throw error;
  }
}

try {
  start();
}
catch (error) {
  throw error;
}