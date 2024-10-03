const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the home page");
    return;
  }

  if (req.url === "/about") {
    res.end("You're on the about page");
    return;
  }

  res.writeHead(404, { "Content-Type": "text/html" });
  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you're looking for</p>
    <a href="/">Back to home</a>
  `);
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
