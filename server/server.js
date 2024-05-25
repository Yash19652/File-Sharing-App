const express = require("express");
const app = express();
const {DBConnection} = require("./database/db")

DBConnection();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
