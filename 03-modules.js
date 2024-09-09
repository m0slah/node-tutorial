// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./04-names");

const sayHi = require("./05.utils");

sayHi("suzan");
sayHi(names.john);
sayHi(names.peter);
