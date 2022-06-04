import React from "react";
import Navigation from "../../components/Navigation";
import Languages from "./components/Languages";
import Experience from "./components/Experience";
import OtherSkills from "./components/OtherSkills";
import Hobbies from "./components/Hobbies";

const Knowledge = () => {
  return (
    <div className="knowledge">
      <Navigation />
      <div className="knowledgeContent">
        <Languages />
        <Experience />
        <OtherSkills />
        <Hobbies />
      </div>
    </div>
  );
};

export default Knowledge;
