import React, { Component } from "react";
import axios from "axios";
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";
import "./App.css";

class App extends Component {
  state = {
    posts: [],
    skip: 0,
    countload: 1
  };

  componentWillMount = () => {
    this.loadPost();
    window.addEventListener("scroll", this.handleScroll);
  };

  loadPost = () => {
    const { skip } = this.state;
    const url = `/api/posts/${skip}`;
    console.log("loadpost");
    axios
      .get(url)
      .then(res => {
        this.setState({ posts: [...this.state.posts, ...res.data] });
      })
      .catch(err => {
        console.log(err);
      });
  };
  handleScroll = () => {
    console.log(window.scrollY);

    if (window.scrollY > 284 * this.state.countload) {
      this.loadMore();
      this.setState({
        countload: this.state.countload + 2.33
      });
      console.log(this.state.countload);
    }
  };

  loadMore = () => {
    console.log("loadmore");
    this.setState(
      prevState => ({
        skip: prevState.skip + 10
      }),

      this.loadPost
    );
  };

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

        <button onClick={this.loadMore}>Load More</button>
      </div>
    );
  }
}

export default App;
