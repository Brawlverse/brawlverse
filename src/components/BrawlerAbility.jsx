import React from "react";

function BrawlerAbility(props) {
  return (
    <div className="brawler-ability">
      <img src={props.img} className="brawler-ability-img" />
      <div className="brawler-ability-info">
        <h2 className="brawler-ability-name">{props.name}</h2>
        <p className="brawler-ability-description">{props.description}</p>
      </div>
    </div>
  );
}

export default BrawlerAbility;
