import React from "react";
import FrenchButton from "../../components/FrenchButton";
import Navigation from "../../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <FrenchButton />
      <div className="homeContent">
        <div className="content">
          <h1>
            {" "}
            Quentin <br /> LAMAGNERE
          </h1>
          <h2>
            Engenering Studies <br /> 4rth year over 5
          </h2>
          {/* <div className="pdf">
            <a href="/ViewPdf" target="_blank">
              Mon CV pdf
            </a>
          </div> */}
          <FrenchButton />
          <div className="arrow">
            <div>
              <i className="fas fa-arrow-down"></i>
            </div>
          </div>

          <div id="mon_ancre" className="info">
            <h3>Currently looking for a 5-6 month internship</h3>
            <p>
              <br />
              I'm loocking for an internship starting in August-Septembre for
              aproximatively 5-6 month. I have to get back to my engenering
              studies by February the 2nd ; thats why I can't take a full-time
              internship that would last until February(included). <br />
              <br />
              <br />
            </p>
            <h3> Missions wanted</h3>
            <p>
              <br />
              As a young developer who started to build onchain a year ago, I
              would love to find any mission/internship related to solidity
              programing and/or smart-contracts integration. <br />
              <br />
              I'm also willing to accept offers related to more traditional
              webapp development using react, html/css(scss) JavaScript or
              TypeScript.
              <br />
              <br />
              Motivated to learn even more about webDev, I'm already looking
              forward to working with you on new projects !
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
