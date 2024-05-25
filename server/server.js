const express = require("express");
const app = express();
const {DBConnection} = require("./database/db")
const fileRouter = require("./routes/fileRoutes");
const cors = require("cors")
DBConnection();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/",fileRouter)

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
