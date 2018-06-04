'use strict';

module.exports = {
  init(inputDirPath, fileName) {
    const [ name, category, type ] = fileName.split('.');
    this.filePath = `${inputDirPath}/${fileName}`;
    this.fileName = fileName;
    this.category = category;
    this.name = name;
    this.type = type;
    this.outputFileName = `${name}-${category}-${type}.json`;
  }
};