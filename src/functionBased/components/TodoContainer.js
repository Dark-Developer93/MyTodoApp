import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import { v4 as uuidv4 } from "uuid";
import { Route, Switch } from "react-router-dom";
import About from "../pages/About";
import NotMatch from "../pages/NotMatch";
import Navbar from "./Navbar";

const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos());

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const addTodoItem = (title, priority, i) => {
    const newTodo = {
      id: uuidv4(),
      title,
      priority,
      completed: false,
      index: i,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, updatedPriority, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
          todo.priority = updatedPriority;
        }
        return todo;
      })
    );
  };
  const [orderdTodos, updateTodos] = useState(todos);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(orderdTodos);
    const [reorderedTodo] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedTodo);

    updateTodos(items);
  }
  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem("todos");
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  // useEffect(() => {
  //   console.log("test run");

  //   // getting stored items
  //   const temp = localStorage.getItem("todos");
  //   const loadedTodos = JSON.parse(temp);

  //   if (loadedTodos) {
  //     setTodos(loadedTodos);
  //   }
  // }, []);

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <div className="inner">
              <Header />
              <InputTodo addTodoProps={addTodoItem} />
              <TodosList
                todos={orderdTodos}
                handleChangeProps={handleChange}
                deleteTodoProps={deleteTodo}
                setUpdate={setUpdate}
                onDragEnd={handleOnDragEnd}
              />
            </div>
          </div>
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="*">
          <NotMatch />
        </Route>
      </Switch>
    </DragDropContext>
  );
};

export default TodoContainer;
