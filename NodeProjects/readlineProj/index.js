let { ask } = require("./utils");
let fs = require("fs");

async function askQuestions() {
  console.log();
  let name = await ask("what is your name? ");
  let age = await ask("what is your age? ");
  let salary = await ask("what is your salary? ");
  debugger;
  return { name, age, salary };
}

async function pushToFile() {
  let { name, age, salary } = await askQuestions();

  debugger;
  await fs.writeFile(
    "info1.txt",
    JSON.stringify({ name, age, salary, date: new Date() }) + "\r\n",
    { flag: "a" },
    async (err) => {
      if (!err) {
        console.log("Data store in a file info1");
        let moreQuestions = await ask("More input? y/n");
        if (moreQuestions === "y") {
          pushToFile();
        } else {
          process.exit();
        }
      }
    }
  );
}
pushToFile();
