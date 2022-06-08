import React from "react";
import FrenchButton from "../../components/FrenchButton";
import Navigation from "../../components/Navigation";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <FrenchButton />
      <div className="contactContent">
        <div className="content">
          <h1>Feel free to contact me !</h1>
          <h2>
            {" "}
            Lamagnere.quentin@gmail.com
            <br /> Phone number: 0635402450
          </h2>

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
      </div>
    </div>
  );
};

export default Contact;
