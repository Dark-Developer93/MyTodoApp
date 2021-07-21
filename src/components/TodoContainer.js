import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 0,
        title: "Setup development environment",
        completed: true,
      },
      {
        id: 1,
        title: "Develop website and add content",
        completed: false,
      },
      {
        id: 2,
        title: "Deploy to live server",
        completed: false,
      },
    ],
  };
  render() {
    return (
      <div>
        <Header />
        <TodosList todos={this.state.todos} />
      </div>
    );
  }
}
export default TodoContainer;
