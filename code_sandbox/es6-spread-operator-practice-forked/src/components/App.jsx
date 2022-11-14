import React, { useState } from "react";
import List from "./List.jsx";

function App() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleTextChange(event) {
    setInputText(event.target.value);
  }

  function handleAddButton() {
    setTodoList((prevValue) => {
      return [...prevValue, inputText];
    });
    setInputText("");
    console.log(todoList);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleTextChange} type="text" value={inputText} />
        <button onClick={handleAddButton}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <List array={todoList} />
      </div>
    </div>
  );
}

export default App;
