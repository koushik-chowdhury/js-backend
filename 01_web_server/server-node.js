const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello koushik, Our server is running");
  } else if (req.url === "/name") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("koushik chowdhury");
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 Not found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server is listening at http://${hostname}:${port}`);
});
