import React from "react";
import Hero from "./components/Hero";

function Events() {
  document.title = "Events | Brawlverse";

  return (
    <Hero
      title="See Information about the"
      important="Events"
      description="Learn about all the game modes, maps, and special events!"
    />
  );
}

export default Events;
