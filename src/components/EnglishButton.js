import React from "react";
import img from "../media/flageng.png";
import { NavLink } from "react-router-dom";

const EnglishButton = () => {
  return (
    <div className="switchLang">
      <NavLink exact to="/" activeClassName="navActive">
        <img
          className="flag"
          src={img}
          alt="profile-pic"
          title="Cliquez pour changer de langue"
        ></img>
      </NavLink>
    </div>
  );
};

export default EnglishButton;
