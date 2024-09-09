const os = require("os");

//Info about current user
const user = os.userInfo();
console.log(user);

//method return the system uptime in secons
console.log(`The system Uptime is ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  relase: os.release(),
  totalmem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
