'use strict';

module.exports = {
  create(inputFile, txtLine, lineNumber) {
    if (inputFile.category === 'npc') {
      if (txtLine.includes('mes(') || txtLine.includes('npctalk(')) {
        if (/".+"/.test(txtLine)) {
          this.inputFile = inputFile;
          this.id = `${inputFile.fileName}-${lineNumber}`;
          this.lineNumbers = [lineNumber];
          this.originalLine = txtLine;
          this.message = txtLine.match(/".+"/)[0].replace(/"/g, "");
        }
      }
    }

    if (inputFile.category === 'ui') {
      if (!txtLine.startsWith('//') && txtLine.length > 0 && !txtLine.startsWith('  #') && !txtLine.startsWith('#')) {
        this.inputFile = inputFile;
        this.id = `${inputFile.fileName}-${lineNumber}`;
        this.lineNumbers = [lineNumber];
        this.originalLine = txtLine;
        this.message = txtLine;
      }
    }
  }
};