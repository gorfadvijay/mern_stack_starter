const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const posts = require("./routes/api/posts");

const app = express();

app.use(bodyParser.json());

//mongoose database

mongodb = require("./config/mongodb").mongoURI;

//mongoDB Connection

mongoose
  .connect(mongodb, { useNewUrlParser: true })
  .then(() => {
    console.log("connection made successfully");
  })
  .catch(err => {
    console.log(err);
  });

app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`listning to port ${port}`);
});
