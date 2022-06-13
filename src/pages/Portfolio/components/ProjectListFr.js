import React, { Component } from "react";
import { portfolioData } from "../../../data/portfolioData";

import ProjectFr from "./ProjectFr";

class ProjectListFr extends Component {
  state = {
    projects: portfolioData,
    radios: [
      { id: 1, value: "javascript", altvalue: "js" },
      { id: 2, value: "html/css", altvalue: "css" },
      { id: 3, value: "react", altvalue: "react" },
      { id: 4, value: "solidity", altvalue: "sol" },
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
                  <label htmlFor={radio.value}>
                    <div className="largeDisplay">{radio.value}</div>
                    <div className="smallDisplay">{radio.altvalue}</div>
                  </label>
                </li>
              );
            })}
          </ul>
          <div className="projects">
            {projects.map((item) => {
              console.log(selectedRadio);
              return (
                item.languages.includes(selectedRadio) === true && (
                  <ProjectFr item={item} key={item.id} />
                )
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default ProjectListFr;
