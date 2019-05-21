import React, { Component } from "react";
import axios from "axios";
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";

import "./App.css";

class App extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios
      .get("/api/posts")
      .then(res => {
        this.setState({ posts: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  addPost = posts => {
    console.log(posts, "addpost");
    axios
      .post("/api/posts", posts)

      .then(res => this.setState({ posts: [...this.state.posts, res.data] }));
    // console.log(posts);
  };

  render() {
    return (
      <div className="App">
        <h1>Posts</h1>
        <AddPost addPost={this.addPost} />
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
