import React from "react";
import Navigation from "../../components/Navigation";
import FrenchButton from "../../components/FrenchButton";

const NotFound = () => {
  return (
    <div className="notFound">
      <Navigation />
      <FrenchButton />
      <div className="notFoundContent">
        <div className="content">
          <h1>ERROR, seems like this page doesn't exist... </h1>
          <h2>
            Try to navigate on this platform only using the displayed navigation
            links
          </h2>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
