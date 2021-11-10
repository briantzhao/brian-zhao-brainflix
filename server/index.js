const uniqid = require("uniqid");
const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const videosRoutes = require("./routes/videosRoutes");

const port = 8080;

app.use(cors());

// app.use(express.static(path.join(__dirname, "public")));

app.use(express.static("public"));

app.use(express.json());

app.use("/videos", videosRoutes);

app.listen(port, function () {
  console.log("Hello World");
});
