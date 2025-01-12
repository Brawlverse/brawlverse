import React, { useState } from "react";
import Hero from "./components/Hero";
import BrawlerStats from "./components/BrawlerStats";
import BrawlerAbilities from "./components/BrawlerAbilities";
import BrawlerAttack from "./components/BrawlerAttack";

function BrawlerPage(props) {
  return (
    <>
      <Hero
        title="Explore Everything about the Brawler"
        important={props.name}
        description={`Check out the stats, abilities, information, tips, and more for ${props.name}!`}
      />
      <div className="content">
        <div className="paragraph">{props.description}</div>
        <BrawlerStats props={props} />
        <div className="brawler-attacks">
          <BrawlerAttack type={props.attack} name={"Attack: "} />
          <BrawlerAttack type={props.super} name={"Super: "} />
        </div>
        <BrawlerAbilities props={props} />
        <h2 className="section-title">Tips</h2>
        <div className="paragraph">
          <ul className="list">
            {props.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default BrawlerPage;
