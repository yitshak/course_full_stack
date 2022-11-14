import React from "react";

function Input(props) {
  return <input type={props.type} placeholder={props.placeholder} />;
}

function Login(props) {
  var isRegistered = props.registered;
  return (
    <div>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        {!isRegistered && (
          <Input type="password" placeholder="Confirm Password" />
        )}
        <button type="submit">{isRegistered ? "Login" : "Register"}</button>
      </form>
    </div>
  );
}

export default Login;
