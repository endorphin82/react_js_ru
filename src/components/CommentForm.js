import React, { Component } from "react";

class CommentForm extends Component {
  state = {
    username: "",
    text: ""
  };

  render() {
    return (
      <div>
        Name: <input
        type='text'
        value={this.state.username}
        onChange={this.handleUserChange}
      />
        <br/>
        Text: <input
        type='text'
        value={this.state.text}
        onChange={this.handleTextChange}
      />
      </div>
    );
  }

  handleUserChange = (ev) => {
    this.setState({
      username: ev.target.value
    });
    ((this.state.username.length < 5) || (this.state.username.length > 15)) ? ev.target.style.borderColor='#ff0000' : ev.target.style.borderColor ='';

  };
  handleTextChange = (ev) => {
    this.setState({
      text: ev.target.value
    });
    ((this.state.text.length < 15) || (this.state.text.length > 50)) ? ev.target.style.borderColor='#ff0000' : ev.target.style.borderColor ='';
  };
}

export default CommentForm;