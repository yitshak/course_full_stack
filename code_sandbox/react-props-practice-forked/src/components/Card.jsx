import React from "react";

function Card(prop) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{prop.name}</h2>
        <img className="circle-img" src={prop.img_url} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{prop.phone}</p>
        <p className="info">{prop.email}</p>
      </div>
    </div>
  );
}

export default Card;
