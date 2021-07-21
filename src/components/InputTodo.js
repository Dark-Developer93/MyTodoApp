import React, { Component } from "react";

class InputTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: "",
      });
    } else alert("Please write a todo item");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={this.state.title}
          name="title"
          onChange={this.onChange}
          //   onKeyPress={this.onSubmit}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default InputTodo;
