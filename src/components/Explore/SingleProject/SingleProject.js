import React, { Component } from "react";
import "./SingleProject.scss";
import ProjectMain from "./ProjectMain/ProjectMain";
import ProjectContent from "./ProjectContent/ProjectContent";

class SingleProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        { name: "terms", link: "#terms" },
        { name: "overview", link: "#overview" },
        { name: "project", link: "#project" },
        { name: "stage & forecast", link: "#stageforecast" },
        { name: "documents", link: "#documents" },
        { name: "invest", link: "#", type: "button" }
      ]
    };
  }

  render() {
    return (
      <div className="SingleProject">
        <ProjectMain />
        <ProjectContent navigation={this.state.menu} />
      </div>
    );
  }
}

export default SingleProject;
