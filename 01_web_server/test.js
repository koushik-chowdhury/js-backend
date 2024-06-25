const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  console.log("new req rec.");
  res.end("Hello from server");
});

server.listen(port, hostname, () => {
  console.log(`Server is listening at ${port}`);
});
