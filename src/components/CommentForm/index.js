import React, { Component } from "react";
import "./style.css";

class CommentForm extends Component {
  state = {
    user: "",
    text: ""
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        user: <input
        type='text'
        className={this.getClassName("user")}
        value={this.state.user}
        onChange={this.handleChange("user")}
      />
        <br/>
        Text: <input
        type='text'
        className={this.getClassName("text")}
        value={this.state.text}
        onChange={this.handleChange("text")}
      />
      </form>
    );
  }

  handleSubmit = ev => {
    ev.preventDefault();
    this.setState({
      user: "",
      text: ""
    });
  };

  handleChange = type => ev => {
    const { value } = ev.target;
    if (value.length > limits[type].max) return;

    this.setState({
      [type]: ev.target.value
    });
  };

  getClassName = type => this.state[type].length && this.state[type].length < limits[type].min
    ? "form-input__error" : "";
}

const limits = {
  user: {
    min: 5,
    max: 15
  },
  text: {
    min: 20,
    max: 50
  }
};
export default CommentForm;