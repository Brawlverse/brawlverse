import React from "react";
import Hero from "./components/Hero";
import Card from "./components/Card";
import images from "./img/img"

function Home() {
  return (
    <>
      <Hero
        title="The Wiki for all Things"
        important="Brawl Stars"
        description="Brawlverse is your go-to guide for brawlers, modes, maps, and more!"
      />
      <div className="content">
        <div className="card-containers">
          <div className="cards">
            <Card link="/brawlers" title="Brawlers" description="Explore everything about the brawlers" src={images.brawlersCard} flex="4" />
            <Card link="/cosmetics" title="Cosmetics" description="Browse through all the cosmetics" src={images.cosmeticsCard} flex="3" />
          </div>
          <div className="cards">
            <Card link="/items" title="Items" description="Check out the game's items" src={images.itemsCard} flex="3" />
            <Card link="/events" title="Events" description="See information about the events" src={images.eventsCard} flex="4" />
          </div>
        </div>
        <h2 className="section-title">Numbers say it all</h2>
        <div className="cards">
          <Card title="0" description="Pages" />
          <Card title="0" description="Users" />
          <Card title="0" description="Comments" />
          <Card title="1" description="Developer" />
        </div>
      </div>
    </>
  );
}

export default Home;
