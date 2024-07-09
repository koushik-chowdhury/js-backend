const http = require("http");
const fs = require("fs");
const url = require("url");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const log = `${Date.now()} : ${req.url} New Req\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Welcome to HomePage");
        break;
      case "/about":
        const username = myUrl.query.myname;
        if (username === undefined) {
          res.end("error");
          break;
        } else {
          res.end(`Hi ${username}`);
        }

        break;
      default:
        res.end("404 not found");
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server is listening at ${port}`);
});
