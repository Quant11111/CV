import React from "react";
import Navigation from "../../components/Navigation";
import ProjectList from "./components/ProjectList";
import FrenchButton from "../../components/FrenchButton";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Navigation />
      <FrenchButton />
      <ProjectList />
    </div>
  );
};

export default Portfolio;
