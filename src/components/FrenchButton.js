import React from "react";
import img from "../media/flagfr.png";
import { NavLink } from "react-router-dom";

const FrenchButton = () => {
  return (
    <div className="switchLangFr">
      <NavLink exact to="/Fr" activeClassName="navActive">
        <img
          className="flagFr"
          src={img}
          alt="profile-pic"
          title="Cliquez pour changer de langue"
        ></img>
      </NavLink>
    </div>
  );
};

export default FrenchButton;
