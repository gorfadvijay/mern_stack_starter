const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    require
  },
  des: {
    type: String,
    require
  }
});

module.exports = Post = mongoose.model("Postlist", postSchema);
