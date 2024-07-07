const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const app = express();
const port = 3000;

// middleware

app.use(express.urlencoded({ extended: false }));

// ROUTS

// get routs

app.get("/api/users", (req, res) => {
  return res.json(users);
});

// Dynamic path parameters

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id == id);
  if (user) {
    return res.json(user);
  } else {
    res.send("User not found");
  }
});

// get routs end

// post routs

app.post("/api/users", (req, res) => {
  // todo : create a new user
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    if (err) {
      return res.status(500).json({ status: "error", message: err.message });
    } else {
      return res.json({ status: " success", id: users.length, Name: body.first_name});
    }
  });
});

// patch rout

app.patch("/api/users/:id", (req, res) => {
  return res.json({ status: "pending" });
});

// delete rout

app.delete("/api/users/:id", (req, res) => {
  return res.json({ status: "pending" });
});

// server

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
