const fs = require('fs');
const chalk = require('chalk');

const fileContent = fs.readFileSync('index.js', 'utf8');
console.log(chalk.red('Hello, World!'));
console.log(chalk.cyan(fileContent));