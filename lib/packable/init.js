"use strict";

process.title = "Packable";

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your package name: ", function(answer) {
  console.log(`Web search returned: https://npmjs.com/package/${answer}`);
  console.log(`Terminal search returned: npm install ${answer}`);
  rl.close(); // returns the terminal to normal
});
