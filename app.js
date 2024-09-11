const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("You're in home page");
    return;
  }

  if (req.url === "/about") {
    //Blocking code
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end("You're in about page");
    return;
  }

  res.end("Error page");
});

server.listen(3000, () => {
  console.log("Server running on port 6000");
});
