import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();

  const [timeValue, setTimeValue] = useState(time);

  function SetTime() {
    let time = new Date().toLocaleTimeString();
    setTimeValue(time);
  }

  setInterval(SetTime, 1000);

  return (
    <div className="container">
      <h1>{timeValue}</h1>
      <button onClick={SetTime}>Get Time</button>
    </div>
  );
}

export default App;
