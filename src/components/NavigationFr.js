import React from "react";
import img from "../media/homepic.jpg";
import { NavLink } from "react-router-dom";

const NavigationFr = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img
            className="pp"
            src={img}
            alt="profile-pic"
            title="I can't wait to work with you !"
          />
          <h3>Quentin LAMAGNERE</h3>
        </div>
      </div>

      <div className="SwitchLang">
        <NavLink exact to="/" activeClassName="navActive">
          <i
            className="flag"
            src={img}
            title="Cliquez pour changer de langue"
          ></i>
        </NavLink>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/Fr" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/KnowledgeFr" activeClassName="navActive">
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/PortfolioFr" activeClassName="navActive">
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/ContactFr" activeClassName="navActive">
              <i className="fas fa-envelope"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://fr.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"> </i>
            </a>
          </li>
          <li>
            <a
              href="https://discord.com/channels/882988878082998343/914252238174715955"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-discord"> </i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/?lang=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"> </i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Quant11111"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"> </i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationFr;
