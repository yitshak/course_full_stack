import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [mouseOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");

  function handleButtonPressed() {
    setHeadingText("Submmited");
    setDisplayName(name);
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function HandleChange(event) {
    console.log();
    setName(event.target.value);
  }

  return (
    <div className="container">
      {/* <h1>{headingText}</h1> */}
      <h1>Hello {displayName}</h1>
      <input
        onChange={HandleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button
        onClick={handleButtonPressed}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ backgroundColor: mouseOver ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
