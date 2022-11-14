import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function addItem() {
    props.onAddItem(inputText);
    setInputText("");
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button onClick={addItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
