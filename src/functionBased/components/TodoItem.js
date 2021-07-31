import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";

//styles
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (e) => {
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
  const { completed, id, title, priority } = props.todo;
  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  useEffect(() => {
    return () => {
      console.log("cleaning up...");
    };
  }, []);

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button
          style={{ cursor: "pointer", width: "50px" }}
          onClick={() => props.deleteTodoProps(id)}
        >
          <FaTrash
            style={{
              color: "orangered",
              fontSize: "16px",
            }}
          />
        </button>
        <span style={completed ? completedStyle : null}>{title}</span>
        <button
          style={
            priority === "High"
              ? { "background-color": "lightcoral" }
              : priority === "Medium"
              ? { "background-color": "yellowgreen" }
              : priority === "Low"
              ? { "background-color": "lightgreen" }
              : priority === "None"
              ? { "background-color": "#f1f3f4" }
              : null
          }
        >
          {priority}
        </button>
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
