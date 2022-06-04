import React from "react";
import Navigation from "../../components/Navigation";

const NotFound = () => {
  return (
    <div className="notFound">
      <Navigation />
      <div className="notFoundContent">
        <div className="content">
          <h1>ERROR, seems like this page doesn't exist... </h1>
          <h2>
            Try to navigate on this platform only using the displayed navigation
            links !
          </h2>

          <h1>ERREUR, il semble que la page n'existe pas... </h1>
          <h2>
            Essayez de naviquer sur cette plateforme en utilisant les différents
            liens mis a disposition !
          </h2>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
