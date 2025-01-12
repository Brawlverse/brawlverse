import React from "react";

function BrawlerAttack({ type, name }) {
  return (
    <div className="brawler-attack">
      <div className="brawler-ability-info">
        <h2 className="brawler-ability-name">{name + type.name}</h2>
        <p className="brawler-ability-description">{type.description}</p>
      </div>
    </div>
  );
}

export default BrawlerAttack;
