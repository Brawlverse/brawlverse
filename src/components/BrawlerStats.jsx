import React from "react";
import Stat from "./Stat";
import images from "../img/img";

function BrawlerStats({ props }) {
  let brawler = props.name.toLowerCase();
  let stats = props.stats;

  return (
    <div className="brawler-stats">
      <img src={images[brawler.replace(" ", "")]} className="brawler-stats-img" />
      <div className="brawler-stats-info">
        <Stat name="Rarity" value={props.rarity} />
        <Stat name="Class" value={stats.class} />
        <Stat name="Damage" value={stats.damage} />
        <Stat name="Super Damage" value={stats.superDamage} />
        <Stat name="Health" value={stats.health} />
        <Stat name="Range" value={stats.range} />
        <Stat name="Super Range" value={stats.superRange} />
        <Stat name="Movement Speed" value={stats.movementSpeed} />
        <Stat name="Reload Speed" value={stats.reloadSpeed} />
        <Stat name="Gender" value={stats.gender} />
        <Stat name="Voice Actor" value={stats.voiceActor} />
        <Stat name="Mastery Title" value={stats.masteryTitle} />
      </div>
    </div>
  );
}

export default BrawlerStats;
