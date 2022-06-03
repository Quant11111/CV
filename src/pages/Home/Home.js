import React from "react";
import Navigation from "../../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>
            {" "}
            Quentin <br /> LAMAGNERE
          </h1>
          <h2>
            Dévelopeur Cursus Ingénieur <br /> niveau licence
          </h2>
          <div className="pdf">
            <a href="/ViewPdf" target="_blank">
              Mon CV pdf
            </a>
          </div>
          <div className="arrow">
            <a href="#mon_ancre">
              <i className="fas fa-arrow-down"></i>
            </a>
          </div>

          <div id="mon_ancre" className="info">
            <h1> Missions recherchées</h1>
            <p>
              As a young developer who started do build onchain a year ago, I
              would love to find any mission/internship related to solidity
              programing and/or smart-contracts integration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
