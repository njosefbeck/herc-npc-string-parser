'use strict';
const hasSameMessage = require('./hasSameMessage');

module.exports = function groupDuplicates(compiledLines, currentLine) {
  // Determine if the currentLine's message
  // exists in one of the objects inside of
  // compiledLines.
  const duplicate = compiledLines.find(compiledLine => hasSameMessage(compiledLine, currentLine));
  const duplicateIndex = compiledLines.findIndex(compiledLine => hasSameMessage(compiledLine, currentLine));

  // If it does not, then add currentLine to the end of compiled Lines
  if (!duplicate) {
    compiledLines.push(currentLine);

  // If it does, add the line number to the proper object in compiledLines
  } else {
    duplicate.lineNumbers.push(...currentLine.lineNumbers);
    compiledLines[duplicateIndex] = duplicate;
  }

  return compiledLines;
};

