import React, { Component } from "react";
import { portfolioData } from "../../data/portfolioData";

import Project from "./Project";

class ProjectList extends Component {
  state = {
    projects: portfolioData,
    radios: [
      { id: 1, value: "javascript" },
      { id: 2, value: "css" },
      { id: 3, value: "react" },
      { id: 4, value: "php" },
    ],
    selectedRadio: "javascript",
  };

  handleHadio = (event) => {
    console.log(event.target.value);
    let radio = event.target.value;
    this.setState({ selectedRadio: radio });
  };

  render() {
    let { projects, radios, selectedRadio } = this.state;

    return (
      <>
        <div className="portfolioContent">
          <ul className="radioDisplay">
            {radios.map((radio) => {
              return (
                <li key={radio.id}>
                  <input
                    type="radio"
                    name="radio"
                    checked={radio.value === selectedRadio}
                    value={radio.value}
                    id={radio.value}
                    onChange={this.handleHadio}
                  />
                  <label htmlFor={radio.value}>{radio.value}</label>
                </li>
              );
            })}
          </ul>
          <div className="projects">
            {projects.map((item) => {
              console.log(selectedRadio);
              return (
                item.languages.includes(selectedRadio) === true && (
                  <Project item={item} key={item.id} />
                )
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default ProjectList;
