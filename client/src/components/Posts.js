import React, { Component } from "react";
import PostItem from "./PostItem";

export class Posts extends Component {
  render() {
    return this.props.posts.map(post => (
      <PostItem key={post._id} post={post} />
    ));
  }
}

export default Posts;
