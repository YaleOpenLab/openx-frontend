import React, { Component } from "react";
import "./SingleProject.scss";
import ProjectMain from "./ProjectMain/ProjectMain";
import ProjectContent from "./ProjectContent/ProjectContent";
import { DATA } from "../../../helpers/enums/temporary-data";

class SingleProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO: get menu items from db or create enum
      menu: [
        { name: "terms", link: "#terms", id: "terms-nav" },
        { name: "overview", link: "#overview", id: "overview-nav" },
        { name: "project", link: "#project", id: "project-nav" },
        {
          name: "stage & forecast",
          link: "#stageforecast",
          id: "stageforecast-nav"
        },
        { name: "documents", link: "#documents", id: "documents-nav" },
        { name: "invest", link: "#", type: "button" }
      ],
      selectedItem: ""
    };
  }

  handleScroll = () => {
    let selectedItem = window.location.href.split("#")[1] + "-nav";
    this.setState({
      selectedItem
    });
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  render() {
    const data = DATA.project[0];
    return (
      <div className="SingleProject">
        <ProjectMain data={data.main}/>
        <ProjectContent
          navigation={this.state.menu}
          active={this.state.selectedItem}
          data={data}
        />
      </div>
    );
  }
}

export default SingleProject;
