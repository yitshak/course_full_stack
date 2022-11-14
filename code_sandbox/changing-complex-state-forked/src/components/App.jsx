import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: ""
  });

  function HandleChange(event) {
    console.log();
    // fullName
    // setFirstName(event.target.value);
  }

  function HandleChange(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          firstName: value,
          lastName: prevValue.lastName
        };
      } else if (name === "lName") {
        return {
          firstName: prevValue.firstName,
          lastName: value
        };
      }
    });
  }

  function SubmitForm(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.firstName} {fullName.lastName}
      </h1>
      <form onSubmit={SubmitForm}>
        <input
          name="fName"
          onChange={HandleChange}
          placeholder="First Name"
          value={fullName.firstName}
        />
        <input
          name="lName"
          onChange={HandleChange}
          placeholder="Last Name"
          value={fullName.lastName}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
