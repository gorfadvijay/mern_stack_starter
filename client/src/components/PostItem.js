import React, { Component } from "react";

export class PostItem extends Component {
  render() {
    console.log(this.props.post);
    const { title, des } = this.props.post;
    return (
      <div>
        <h2>{title}</h2>
        <p>{des}</p>
      </div>
    );
  }
}

export default PostItem;
