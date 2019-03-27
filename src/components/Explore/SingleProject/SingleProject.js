import React, { Component } from "react";
import "./SingleProject.scss";
import ProjectMain from "./ProjectMain/ProjectMain";
import ProjectContent from "./ProjectContent/ProjectContent";
import { DATA } from "../../../helpers/enums/temporary-data";
import { connect } from "react-redux";
import { fetchProject } from "./store/actions";
import PageLoading from "../../../components/General/Loading/Loading";

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
      data: {},
      loading: true,
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

  componentDidUpdate = prevProps => {
    if (this.props.project.isLoading !== prevProps.project.isLoading) {
      this.setState({
        data: this.props.project.items,
        loading: this.props.project.isLoading
      });
    }
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  render() {
    const data = DATA.project[0];
    return (
      <div className="SingleProject">
        {this.state.loading ? (
          <PageLoading />
        ) : (
          <React.Fragment>
            <ProjectMain tempData={data.main} data={this.state.data} />
            <ProjectContent
              navigation={this.state.menu}
              active={this.state.selectedItem}
              tempData={data}
              data={this.state.data}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
  fetchProject: id => dispatch(fetchProject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProject);
