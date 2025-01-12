import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link to={props.link} className="card" style={{ flex: props.flex }}>
      {props.src && <img src={props.src} className="card-img" />}
      <h2 className="card-title">{props.title}</h2>
      <p className="card-description">{props.description}</p>
    </Link>
  );
}

export default Card;
