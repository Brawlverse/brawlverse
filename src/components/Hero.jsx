import React from "react";

function Hero(props) {
  return (
    <div className="hero">
      <h1 className="hero-title">
        {props.title} <div className="hero-title-important">{props.important}</div>
      </h1>
      <p className="hero-description">{props.description}</p>
    </div>
  );
}

export default Hero;
