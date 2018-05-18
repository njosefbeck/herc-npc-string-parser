const Line = require('./Line');
let lineNumber = 0;

module.exports = function extractNPCLinesToArray(txtLine) {
	lineNumber++;

	if (txtLine.includes('mes(') || txtLine.includes('npctalk(')) {

		if (/".+"/.test(txtLine)) {
			const line = Object.create(Line);
			line.create(lineNumber, 're_jobs_academy.txt', txtLine);
			line.emit('created', line);
		}
	}
}