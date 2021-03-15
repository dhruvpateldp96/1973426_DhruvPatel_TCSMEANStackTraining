//Function as an argument
console.log("\n Functions as an argument demo");
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const data = (func) => {
  // get data from user or other external source
  var num1 = 10;
  var num2 = 20;
  return func(num1, num2);
};

console.log(data(add));
console.log(data(subtract));

//Funtions returning Functions
console.log("\n Functions returning Function demo, method chaining");
const multi = (integer) => (anotherInteger) => integer * anotherInteger;
const div = (integer) => (anotherInteger) => integer / anotherInteger;
console.log(`The funcion multi is --->${multi}`);
console.log(`The function div is --->${div}`);
console.log(`The function add is --->${add}`);
console.log(`The function subtract is --->${subtract}`);

const result1 = multi(10)(50);
const result2 = div(25)(5);

console.log(result1);
console.log(result2);
