import React from "react";
import "../App.css";

function Cookie({ info }) {
  return (
    <div className="text">
      <img src={info.image} />
      <h5> {info.name}</h5>
      <p>{info.price} KD</p>
    </div>
  );
}

export default Cookie;
