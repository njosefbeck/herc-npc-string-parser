'use strict';
const readline = require('readline');
const fs = require('fs');
const Line = require('./Line');
const extractNPCLinesToArray = require('./extractNPCLinesToArray');

const rl = readline.createInterface({
	input: fs.createReadStream('re_jobs_academy.txt'),
	crlfDelay: Infinity
});

let lines = [];

rl.on('line', (line) => extractNPCLinesToArray(line));
rl.on('close', () => console.log(lines));

Line.on('created', (line) => lines.push(line));
