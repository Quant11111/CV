import React from "react";
import img from "../media/homepic.jpg";
import { NavLink } from "react-router-dom";

const Navigation = () => {
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

      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/CV" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Knowledges" activeClassName="navActive">
              <i className="fas fa-mountain"></i>
              <span>Skills</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Portfolio" activeClassName="navActive">
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Contact" activeClassName="navActive">
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
              href="https://discord.com/"
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
              href="https://github.com/"
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

export default Navigation;
