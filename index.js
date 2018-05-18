'use strict';
const readline = require('readline');
const fs = require('fs');
const Line = require('./Line');
const extractNPCLinesToArray = require('./extractNPCLinesToArray');
const groupDuplicates = require('./groupDuplicates');

const rl = readline.createInterface({
	input: fs.createReadStream('re_jobs_academy.txt'),
	crlfDelay: Infinity
});

let lines = [];

rl.on('line', (line) => extractNPCLinesToArray(line));
Line.on('created', (line) => lines.push(line));

rl.on('close', () => {
  // Reduce duplicates here, adding their line numbers
  // to the first instance of a duplicate
  const reduced = lines.reduce(groupDuplicates, [{}]);
  console.log(reduced);

});
