const express = require("express");
const router = express.Router();

// Post Model
const Post = require("../../models/post");

// @route   GET api/Posts
// @desc    Get All Posts

router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))

    .catch(err => {
      console.log(err);
    });
});
// @route   GET api/Posts
// @desc    Get All Posts

router.get("/:i", (req, res) => {
  Post.find()
    .skip(req.params.i)
    .limit(10)
    .then(posts => res.json(posts))

    .catch(err => {
      console.log(err);
    });
});

// @route   post api/posts
// @desc    post a Post

router.post("/", (req, res) => {
  console.log(req.body);
  const newPost = new Post(req.body);
  newPost
    .save()
    .then(posts => {
      res.json(posts);
      // console.log(posts);
    })

    .catch(err => {
      console.log(err);
    });
});

// @route   DELETE api/posts/:id
// @desc    Delete A posts

router.delete("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
