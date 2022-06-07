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
            <h3>Currently looking for a 5-6 month internship</h3>
            <p>
              <br />
              I'm loocking for an internship starting in August-Septembre for
              aproximatively 5-6 month. I have to get back to my engenering
              studies by February the 2nd ; thats why I can't take a full-time
              internship that would last until February. <br />
              <br />
              <br />
            </p>
            <h3> Missions wanted</h3>
            <p>
              <br />
              As a young developer who started do build onchain a year ago, I
              would love to find any mission/internship related to solidity
              programing and/or smart-contracts integration. <br />
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
