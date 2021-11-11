require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const videosRoutes = require("./routes/videosRoutes");

//grab port from environment variables if available, otherwise use port 8000
const port = process.env.PORT || 8000;

//middleware functions enable cors, serves up static files and parses json from post requests
app.use(cors());

app.use(express.static("public"));

app.use(express.json());

//gives server access to video routes
app.use("/videos", videosRoutes);

//initializes server
app.listen(port, function () {
  console.log(`Server running on port ${port}`);
});
