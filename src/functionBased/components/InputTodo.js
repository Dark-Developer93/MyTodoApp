import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: "",
    priority: "",
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim() && inputText.priority.trim()) {
      props.addTodoProps(inputText.title, inputText.priority);
      setInputText({
        title: "",
        priority: "",
      });
    } else {
      alert("Please write item and choose priority");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <input
        tpye="radio"
        list="priorities"
        name="priority"
        id="priority"
        className="input-text"
        placeholder="Choose the priority"
        value={inputText.priority}
        onChange={onChange}
      />
      <datalist id="priorities">
        <option value="High" />
        <option value="Medium" />
        <option value="Low" />
        <option value="None" />
      </datalist>
      <button className="input-submit">
        <FaPlusCircle
          style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }}
        />
      </button>
    </form>
  );
};

export default InputTodo;
