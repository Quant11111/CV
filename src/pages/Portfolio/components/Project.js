import React, { Component } from "react";

class Project extends Component {
  state = {
    showInfo: false,
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    console.log(this.props);

    let { name, languagesIcons, source, info, picture } = this.props.item;

    return (
      <div className="project">
        <div className="icon">
          {languagesIcons.map((icon) => (
            <i className={icon} key={icon}></i>
          ))}
        </div>
        <h3>{name}</h3>
        <img src={picture} alt="" onClick={this.handleInfo} />
        <span className="infos">
          <i className="fas fa-plus-circle" onClick={this.handleInfo}></i>
        </span>
        {this.state.showInfo && (
          <>
            <div className="backGround" onClick={this.handleInfo}></div>
            <div className="modalContainer">
              <div className="modal">
                <div className="modalTitle">
                  <h2>{name}</h2>
                  <b onClick={this.handleInfo}>X</b>
                </div>
                <br />
                <div className="modalContent">
                  <div className="modalProps">
                    <a href={source} rel="noopener noreferrer" target="_blank">
                      Code source
                    </a>
                    <br />
                    <br />
                  </div>
                  <p>{info}</p>
                  <br />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Project;
