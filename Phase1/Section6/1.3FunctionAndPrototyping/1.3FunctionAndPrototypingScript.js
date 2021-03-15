function Employee(name, DOB, designation) {
  this.name = name;
  this.DOB = DOB;
  this.designation = designation;
}

const Emp1 = new Employee("Dhruv", 1996, "Professor");
const Emp2 = new Employee("Raj", 1997, "Professor1");
const Emp3 = new Employee("Jay", 1998, "Professor2");

Employee.prototype.calculateAge = function () {
  return console.log(`The age of ${this.name} is ${2021 - this.DOB}`);
};

console.log(Emp1);
Emp1.calculateAge();
console.log(Emp2);
Emp2.calculateAge();
console.log(Emp3);
Emp3.calculateAge();
