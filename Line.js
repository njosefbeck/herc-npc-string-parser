'use strict';
const EventEmitter = require('events');
const eventEmitter = Object.create(new EventEmitter());

module.exports = Object.assign(eventEmitter, {
	create(lineNumber, file, line) {
		this.lineNumber = lineNumber;
		this.file = file;
		this.line = {
			original: line,
			message: line.match(/".+"/)[0].replace(/"/g, ""),
		}
	}
});