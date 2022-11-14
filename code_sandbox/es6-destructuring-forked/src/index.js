// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice.js";

const [honda, tesla] = cars;
const teslaTopSpeed = tesla.speedStats.topSpeed;
const [teslaTopColour] = tesla.coloursByPopularity;
const hondaTopSpeed = honda.speedStats.topSpeed;
const [hondaTopColour] = honda.coloursByPopularity;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
