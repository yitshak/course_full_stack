import React from "react";
// import Login from "./Login";

var isLoggedIn = true;

function Input(props) {
  return <input type={props.type} placeholder={props.placeholder} />;
}

function LoginForm() {
  return (
    <div>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
function Greeting() {
  const currentTime = new Date().getHours();
  // return currentTime >= 7 ? <h1>Good After-noon</h1> : <h1>Good morning!</h1>;
  return currentTime >= 12 && <h1>Good After-noon</h1>;
}
function App() {
  return (
    <div className="container">{isLoggedIn ? <Greeting /> : <LoginForm />}</div>
  );
}

export default App;
