import React, { useState } from "react";
import Hero from "./components/Hero";
import BrawlerCard from "./components/BrawlerCard";
import brawlers from "./brawlers.json";
import Search from "./components/Search";

function Brawlers() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBrawlers = brawlers.filter((brawler) => brawler.name.toLowerCase().includes(searchTerm.trim().toLowerCase()));

  document.title = "Brawlers | Brawlverse";

  return (
    <>
      <Hero
        title="Explore Everything about the"
        important="Brawlers"
        description="Dive into stats, abilities, and tips for every Brawler!"
      />
      <div className="content">
        <Search setSearchTerm={setSearchTerm} />
        <div className="cards">
          {filteredBrawlers.map((brawler, index) => (
            <BrawlerCard
              link={brawler.name.toLowerCase().replace(/ /g, "-")}
              key={index}
              title={brawler.name}
              description={brawler.rarity}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Brawlers;
