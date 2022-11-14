import React, { useState } from "react";
import ListItem from "./ListItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function onDeleteItem(itemId) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== itemId;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ListItem
              key={index}
              id={index}
              desc={todoItem}
              onCheck={onDeleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
