import React from "react";
import BrawlerAbility from "./BrawlerAbility";
import images from "../img/img";

function BrawlerAbilities({ props }) {
  let gadgets = props.abilities.gadgets;
  let starPowers = props.abilities.starPowers;
  let hypercharge = props.abilities.hypercharge;
  let abilities = [...gadgets, ...starPowers, hypercharge];

  return (
    <div className="brawler-abilities">
      {abilities.map((ability, index) => {
        let imageName1 = ability.name.replace("-", " ").replace(/[.!]/g, "").split(" ");
        let imageName2 = imageName1.length > 1 ? imageName1[0].toLowerCase() + imageName1[1] : imageName1[0].toLowerCase();
        return <BrawlerAbility key={index} name={ability.name} description={ability.description} img={images[imageName2]} />;
      })}
    </div>
  );
}

export default BrawlerAbilities;
