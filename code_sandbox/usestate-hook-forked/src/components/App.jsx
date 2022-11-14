import React, { useState } from "react";

function App() {
  const state = useState(0);
  // destructured 
  const [count,setcount] = state
  console.log(state);
  function increase() {
    setcount(count+1)
  }

  function decrease() {
    setcount(count>0 ? count-1 : 0)
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
