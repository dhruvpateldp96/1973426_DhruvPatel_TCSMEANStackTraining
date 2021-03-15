const empId = (function () {
  let count = 0;
  return function () {
    ++count;
    return `emp${count}`;
  };
})();

console.log("EmployeeIDs are listed as below ---> empId is an IIFE");
console.log("Dhruv: " + empId());
console.log("Raj: " + empId());
console.log("Jay: " + empId());

//Callbacks
console.log("\n"); //to start the output from the neext line
console.log("Starting with callbacks");
const greeting = (ln) => console.log("Welcome " + ln);

const fullName = (firstName, lastName, callback) => {
  console.log("My name is " + firstName + " " + lastName);
  callback(lastName);
};

fullName("Dhruv", "Patel", greeting);
console.log("\n");
fullName("Raj", "Gandhi", greeting);
console.log("\n");
fullName("Jay", "Vaghasia", greeting);
