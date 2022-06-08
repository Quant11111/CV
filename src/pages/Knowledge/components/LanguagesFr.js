import React, { Component } from "react";
import ProgressBarFr from "./ProgressBarFr";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "JavaScript", xp: 1.7 },
      { id: 2, value: "Html/Css", xp: 1.95 },
      { id: 3, value: "Python", xp: 1.0 },
      { id: 4, value: "Solidity", xp: 0.9 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 1.3 },
      { id: 2, value: "Hardhat", xp: 0.7 },
      { id: 3, value: "Remix", xp: 0.9 },
    ],
  };

  render() {
    let { languages, frameworks } = this.state;
    return (
      <div className="languagesFrameworks">
        <ProgressBarFr
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBarFr
          languages={frameworks}
          title="frameworks & libraries"
          className="frameworksDisplay"
        />
      </div>
    );
  }
}

export default Languages;
