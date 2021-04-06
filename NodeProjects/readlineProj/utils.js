let obj = require("readline");

let r1 = obj.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(questionText) {
  return new Promise((resolve, reject) => {
    r1.question(questionText, (input) => resolve(input));
  });
}

module.exports = { ask };
