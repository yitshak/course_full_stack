import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function HandleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      }
      if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      }
    });
  }

  function HandleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={HandleSubmit}>
        <input
          onChange={HandleChange}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={HandleChange}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={HandleChange}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
