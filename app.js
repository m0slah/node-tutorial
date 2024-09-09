// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const john = "john";
const peter = "peter";

function sayHi(name) {
  console.log(`Hello ${name}`);
}

sayHi("suzan");
sayHi(john);
sayHi(peter);
