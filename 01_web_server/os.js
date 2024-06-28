const os = require("os");
const arch = os.arch();
if (arch == "x64") {
  console.log("success");
} else {
  console.log(error);
}
console.log(os.uptime());
