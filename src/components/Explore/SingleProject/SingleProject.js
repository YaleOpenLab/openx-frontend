import React, { Component } from "react";
import "./SingleProject.scss";
import ProjectMain from "./ProjectMain/ProjectMain";
import ProjectContent from "./ProjectContent/ProjectContent";
import { connect } from "react-redux";
import { fetchProject } from "./store/actions";
import PageLoading from "../../../components/General/Loading/Loading";

class SingleProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        { name: "invest", link: `/investor/${this.props.match.params.projectId}/confirm`, type: "button" }
      ],
      data: {},
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
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.handleScroll);
    const projectId = this.props.match.params.projectId;
    this.props.fetchProject(projectId);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  render() {
    const { project, loading } = this.props;
    return (
      <div className="SingleProject">
        {!project.Index || loading ? (
          <PageLoading />
        ) : (
          <React.Fragment>
            <ProjectMain data={project} />
            <ProjectContent
              navigation={this.state.menu}
              active={this.state.selectedItem}
              data={project.Content}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
	project: state.project.items,
	loading: state.project.isLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchProject: id => dispatch(fetchProject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProject);
