import React from "react";
import { Droppable } from "react-beautiful-dnd";
import TodoItem from "./TodoItem";

const TodosList = (props) => {
  return (
    <Droppable droppableId="orderdTodos">
      {(provided) => (
        <ul {...provided.droppableProps} ref={provided.innerRef}>
          {props.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleChangeProps={props.handleChangeProps}
              deleteTodoProps={props.deleteTodoProps}
              setUpdate={props.setUpdate}
              onDragEnd={props.handleOnDragEnd}
              index={todo.id}
            />
          ))}
        </ul>
      )}
    </Droppable>
  );
};

export default TodosList;
