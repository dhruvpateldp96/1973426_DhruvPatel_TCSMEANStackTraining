let x = 2 * 3 + 5;
let y = 3 * 4;

const myFunction = (num1, num2) => num1 * num2 + (num1 + num2);

console.log(`The function is ---->${myFunction}`);

console.log(`The input args are 3,4 and the result is ${myFunction(3, 4)}`);

console.log(`The input args are 2,3 and the result is ${myFunction(2, 3)}`);

const toCelcius = (f) => (5 / 9) * (f - 32);

console.log(
  "The 60 F temperature converted to Celcius is ---> " + toCelcius(60)
);
