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

  handlerChange = (id) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    });
  };
  render() {
    return (
      <div>
        <Header />
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handlerChange}
        />
      </div>
    );
  }
}
export default TodoContainer;
