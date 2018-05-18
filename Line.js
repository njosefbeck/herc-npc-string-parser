'use strict';
const EventEmitter = require('events');
const eventEmitter = Object.create(new EventEmitter());

module.exports = Object.assign(eventEmitter, {
	create(lineNumber, file, line) {
    this.id = file + lineNumber;
		this.lineNumbers = [lineNumber];
		this.file = file;
    this.original = line;
    this.message = line.match(/".+"/)[0].replace(/"/g, "");
	}
});