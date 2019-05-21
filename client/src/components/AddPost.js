import React from "react";

class AddPost extends React.Component {
  state = {
    post: ""
  };
  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addPost(this.state.post);
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.message}
          onChange={this.handleChange}
          placeholder="Type Your Message and hit enter"
          type="text"
        />
        <input placeholder="submit" type="submit" />
      </form>
    );
  }
}

export default AddPost;
