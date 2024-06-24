<!-- day 1 -->

# File Handling (fs)

> **fs Stand for -> File System**

## Functions Name `(fs)`

> - [x] `fs.writeFileSync()`
> - [x] `fs.writeFile()`
> - [x] `fs.readFile()`
> - [x] `fs.readFileSync()`
> - [x] `fs.appendFile()`
> - [x] `fs.appendFileSync()`

### Diffrence between Synchronous & Asynchronous

<hr>

| Feature         | Asynchronous                          | Synchronous                                       |
| --------------- | ------------------------------------- | ------------------------------------------------- |
| Execution Style | Synchronous                           | Asynchronous                                      |
| Blocking        | No                                    | Yes (blocks code execution until write finishes)  |
| Error Handling  | Requires callback function for errors | Throws exception on error                         |
| Use Cases       | Most Node.js applications             | Simple scripts, initialization (use with caution) |
| Benefits        | Non-blocking, responsive application  | Simpler syntax (for beginners)                    |

### Example

<hr>

1.  **`fs.writeFileSync()`**

```javascript
const fs = require("fs");
fs.writeFileSync("./test.txt", "Hey Koushik");
```

```
it will create a page name test.txt synchronously.
```

2.  **`fs.writeFile()`**

```javascript
fs.writeFile("./test.txt", "hey koushik", (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("data written succesfully");
  }
});
```

3.  `fs.readFileSync()`

```javascript
const fs = require("fs");
fs.readFileSync("./test.txt", "utf-16");
```

4.  `fs.readFile()`

```javascript
fs.readFile("./test.txt", "utf-16", (err, value) => {
  if (err) {
    console.log("error");
  } else {
    console.log(value);
  }
});
```
5.  `fs.appendFileSync()`

```javascript
fs.appendFileSync("./test.txt", "Hey i am new here");
```

6.  `fs.appendFile()`

```javascript
fs.appendFile("./test.txt", "Hey adding data Asynchronously", (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("Data append succesfully");
  }
});
```