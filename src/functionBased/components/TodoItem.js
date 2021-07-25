import React, { useState } from "react";

//styles
import styles from "./TodoItem.module.css";

import React from "react";

const TodoItem = () => {
  const [editing, setEditing] = setState(false);

  const handleEditing = (e) => {
    setEditing(true);
  };

  const handleUpdatedDone = () => {
    if (e.key === "Enter") {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };
  const { completed, id, title } = props.todo;
  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button onClick={() => props.deleteTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => props.setUpdate(e.target.value, id)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
