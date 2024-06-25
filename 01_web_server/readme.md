# Node.js HTTP Server Example

This document provides an in-depth explanation of a simple Node.js HTTP server code. The server responds to different URLs with different messages.

## Code Explanation

### Importing the `http` Module

- **Code**: `const http = require("http");`
- **Explanation**: The `http` module is required to create the server. The `require` function imports this module.

### Defining the Hostname and Port

- **Code**: `const hostname = "127.0.0.1"; const port = 3001;`
- **Explanation**: `hostname` and `port` are constants defining where the server will listen for requests. `127.0.0.1` is the localhost IP address, and `3001` is the port number.

### Creating the Server

- **Code**: `const server = http.createServer((req, res) => { ... });`
- **Explanation**: The `createServer` method creates a new HTTP server and takes a callback function that handles requests (`req`) and responses (`res`).
  - **Request (`req`)**: Represents the HTTP request and contains details such as the URL and headers.
  - **Response (`res`)**: Represents the HTTP response that the server sends back to the client.

#### Handling Different URLs

1. **Root URL (`/`)**
   - **Code**: `if (req.url === "/") { ... }`
   - **Explanation**:
     - `req.url === "/"`: Checks if the request URL is the root.
     - `res.statusCode = 200`: Sets the HTTP status code to 200 (OK).
     - `res.setHeader("Content-Type", "text/plain")`: Sets the response header to indicate plain text content.
     - `console.log(req.headers)`: Logs the request headers to the console.
     - `res.end("Hello koushik, Our server is running")`: Ends the response with the message.

2. **Name URL (`/name`)**
   - **Code**: `else if (req.url === "/name") { ... }`
   - **Explanation**:
     - `req.url === "/name"`: Checks if the request URL is `/name`.
     - The rest follows the same logic as the root URL.

3. **About URL (`/about`)**
   - **Code**: `else if (req.url === "/about") { ... }`
   - **Explanation**:
     - `req.url === "/about"`: Checks if the request URL is `/about`.
     - The rest follows the same logic as the root URL.

4. **Default Case (404 Not Found)**
   - **Code**: `else { ... }`
   - **Explanation**:
     - If none of the above URLs match, this block is executed.
     - The HTTP status code is set to `200` (OK), but a `404 Not found` message is returned.

### Starting the Server

- **Code**: `server.listen(port, hostname, () => { ... });`
- **Explanation**: The `listen` method starts the server and makes it listen for requests on the specified `hostname` and `port`.
  - The callback function logs a message to the console once the server is running.

## Full Example Code

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
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 Not found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server is listening at http://${hostname}:${port}`);
});
