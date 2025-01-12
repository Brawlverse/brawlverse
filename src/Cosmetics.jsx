import React from "react";
import Hero from "./components/Hero";

function Cosmetics() {
  document.title = "Cosmetics | Brawlverse";

  return (
    <Hero
      title="Browse Through all the"
      important="Cosmetics"
      description="Check out skins, sprays, pins, and other cool cosmetics!"
    />
  );
}

export default Cosmetics;
