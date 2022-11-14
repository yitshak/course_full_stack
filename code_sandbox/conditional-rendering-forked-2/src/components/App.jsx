import React from "react";
import Login from "./Login";

var isLoggedIn = true;
var isRegistered = true;

function Greeting() {
  const currentTime = new Date().getHours();
  return currentTime >= 12 ? <h1>Good After-noon</h1> : <h1>Good morning!</h1>;
  //return currentTime >= 9 && <h1>Good After-noon</h1>;
}
function App() {
  return (
    <div className="container">
      {isLoggedIn ? <Greeting /> : <Login registered={isRegistered} />}
    </div>
  );
}

export default App;
