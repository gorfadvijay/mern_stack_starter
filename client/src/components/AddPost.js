import React from "react";

class AddPost extends React.Component {
  state = {
    title: "",
    des: ""
  };
  handleChange = e => {
    // console.log(e.target.value);
    //console.log(e.target.name);

    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    this.props.addPost(this.state);
    this.setState({
      title: "",
      des: ""
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.title}
          name="title"
          onChange={this.handleChange}
          placeholder="Type Your Message and hit enter"
          type="text"
        />
        <input
          style={{ margin: "20px" }}
          value={this.state.des}
          name="des"
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
