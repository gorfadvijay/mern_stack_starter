const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Post = require("./models/post");

const app = express();
app.listen(5000, console.log("listning top port 5000 "));

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

const newPost = new Post({
  title: "hero",
  des: "maion tera hero"
})
  .save()
  .then(post => {
    console.log(post);
  });
