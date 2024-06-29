# Node.js HTTP Server Example

This document provides an in-depth explanation of a simple Node.js HTTP server code. The server responds to different URLs with different messages.

## Code Explanation

### Importing the `http` Module

- **Code**: `const http = require("http");`
- **Explanation**: The `http` module is required to create the server. The `require` function imports this module.

### Defining the Hostname and the Port

- **Code**: `const hostname = "127.0.0.1"; const port = 3001;`
- **Explanation**: `hostname` and `port` are constants defining where the server will listen for requests. `127.0.0.1` is the localhost IP address, and `3001` is the port number.

### Creating the Server

- **Code**: `const server = http.createServer((req, res) => { ... });`
- **Explanation**: The `createServer` method creates a new HTTP server and takes a callback function that handles requests (`req`) and responses (`res`).
  - **Request (`req`)**: Represents the HTTP request and contains details such as the URL and headers.
  - **Response (`res`)**: Represents the HTTP response that the server sends back to the client.

### Handling Different URLs

#### Root URL (`/`)

- **Code**: `if (req.url === "/") { ... }`
- **Explanation**:
  - `req.url === "/"`: Checks if the request URL is the root.
  - **Setting Status Code**:
    - **Code**: `res.statusCode = 200;`
    - **Explanation**: Sets the HTTP status code to 200 (OK). The status code is a three-digit number that indicates the result of the HTTP request.
    - **Common Status Codes**:
      - `200 OK`: The request was successful.
      - `404 Not Found`: The requested resource was not found.
      - `500 Internal Server Error`: The server encountered an error.
  - **Setting Response Header**:
    - **Code**: `res.setHeader("Content-Type", "text/plain");`
    - **Explanation**: Sets the response header to indicate plain text content.
  - **Logging Headers**:
    - **Code**: `console.log(req.headers);`
    - **Explanation**: Logs the request headers to the console.
  - **Ending the Response**:
    - **Code**: `res.end("Hello koushik, Our server is running");`
    - **Explanation**: Ends the response wit the message. The `res.end` method signals to the server that all of the response headers and body have been sent.

#### Name URL (`/name`)

- **Code**: `else if (req.url === "/name") { ... }`
- **Explanation**:
  - `req.url === "/name"`: Checks if the request URL is `/name`.
  - The rest follows the same logic as the root URL.

#### About URL (`/about`)

- **Code**: `else if (req.url === "/about") { ... }`
- **Explanation**:
  - `req.url === "/about"`: Checks if the request URL is `/about`.
  - The rest follows the same logic as the root URL.

#### Default Case (404 Not Found)

- **Code**: `else { ... }`
- **Explanation**:
  - If none of the above URLs match, this block is executed.
  - **Setting Status Code**:
    - **Code**: `res.statusCode = 404;`
    - **Explanation**: Sets the HTTP status code to 404 (Not Found).
  - **Setting Response Header**:
    - **Code**: `res.setHeader("Content-Type", "text/plain");`
    - **Explanation**: Sets the response header to indicate plain text content.
  - **Ending the Response**:
    - **Code**: `res.end("404 Not found");`
    - **Explanation**: Ends the response with a "404 Not found" message.

### Starting the Server

- **Code**: `server.listen(port, hostname, () => { ... });`
- **Explanation**: The `listen` method starts the server and makes it listen for requests on the specified `hostname` and `port`.
  - The callback function logs a message to the console once the server is running.

### Full Example Code

Here is the complete code for reference:

```javascript
const http = require("http");
const hostname = "127.0.0.1";
const port = 3001;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    console.log(req.headers);
    res.end("Hello koushik, Our server is running");
  } else if (req.url === "/name") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("koushik chowdhury");
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, my name is koushik chowdhury and i am a web developer.");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 Not found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server is listening at http://${hostname}:${port}`);
});
