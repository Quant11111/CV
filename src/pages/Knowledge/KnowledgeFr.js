import React from "react";
import NavigationFr from "../../components/NavigationFr";
import LanguagesFr from "./components/LanguagesFr";
import ExperienceFr from "./components/ExperienceFr";
import OtherSkillsFr from "./components/OtherSkillsFr";
import HobbiesFr from "./components/HobbiesFr";
import EnglishButton from "../../components/EnglishButton";

const KnowledgeFr = () => {
  return (
    <div className="knowledge">
      <NavigationFr />
      <EnglishButton />
      <div className="knowledgeContent">
        <LanguagesFr />
        <ExperienceFr />
        <OtherSkillsFr />
        <HobbiesFr />
      </div>
    </div>
  );
};

export default KnowledgeFr;
