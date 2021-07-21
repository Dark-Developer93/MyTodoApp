import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";

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

  DeleteTodo = (id) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.filter((todo) => {
          return todo.id !== id;
        }),
      };
    });
  };

  addTodoItem = (title) => {
    console.log("addTodoItem: ", title);
    // this.setState((prevState) => {
    //   return {
    //     todos: [
    //       ...prevState.todos,
    //       {
    //         id: prevState.todos.length,
    //         title,
    //         completed: false,
    //       },
    //     ],
    //   };
    // });
  };

  render() {
    return (
      <div>
        <Header />
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handlerChange}
          deleteTodoProps={this.DeleteTodo}
        />
      </div>
    );
  }
}
export default TodoContainer;
