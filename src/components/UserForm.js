import React, { Component } from "react";

class UserForm extends Component {

  render() {
    return (
      <div>
        Name: <input
        type='text'
        value={this.props.value}
        onChange={this.handleUserChange}
      />
      </div>
    );
  }

  handleUserChange = (ev) => {
    if (ev.target.value.length > 10) return;
    this.props.onChange(ev.target.value);
    // this.setState({
    //   username: ev.target.value
    // });
  };
}

export default UserForm;