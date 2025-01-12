import React from "react";

function Stat(props) {
  return (
    <div className="stat">
      <h2 className="stat-name">{props.name}</h2>
      <p className="stat-value">{props.value}</p>
    </div>
  );
}

export default Stat;
