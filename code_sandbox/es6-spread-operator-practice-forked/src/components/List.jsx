import React from "react";

function List(props) {
  return (
    <ul>
      {props.array.map((value) => {
        return <li>{value}</li>;
      })}
    </ul>
  );
}

export default List;
