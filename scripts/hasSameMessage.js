'use strict';

module.exports = function hasSameMessage(compiledLine, currentLine) {
  return compiledLine.message === currentLine.message;
};