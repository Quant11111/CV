import React from "react";
import NavigationFr from "../../components/NavigationFr";
import ProjectListFr from "./components/ProjectListFr";
import EnglishButton from "../../components/EnglishButton";

const PortfolioFr = () => {
  return (
    <div className="portfolio">
      <NavigationFr />
      <EnglishButton />
      <ProjectListFr />
    </div>
  );
};

export default PortfolioFr;
