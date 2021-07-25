import React, { useState } from "react";

const InputTodo = (props) => {
  const [title, setTitle] = useState("");

  const onChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      props.addTodoProps(title);
      setTitle("");
    } else alert("Please write a todo item");
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="What needs to be done?"
        value={title}
        name="title"
        onChange={onChange}
      />
      <button type="submit" className="input-submit">
        Submit
      </button>
    </form>
  );
};

export default InputTodo;
