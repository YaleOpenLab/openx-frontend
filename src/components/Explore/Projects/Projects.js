import React, { Component } from "react";
import "./Projects.scss";
import ProjectsToolsComponent from "../ProjectsToolsComponent/ProjectsToolsComponent";
import ProjectsTemplate from "./ProjectsTemplate/ProjectsTemplate";
import connect from "react-redux/es/connect/connect";
import { fetchProjects } from "./store/actions";
import ExploreNotice from "./ExploreNotice/ExploreNotice";
import PageLoading from "../../General/Loading/Loading";
import EmptyContent from "../../General/EmptyContent/EmptyContent";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {},
      noticeVisible: !localStorage.getItem("explore-notice"),
      type: null
    };
  }

  componentDidMount() {
    this.setState({ type: this.props.match.params.type });
    this.props.fetchProjects(this.props.match.params.type);
  }

  componentDidUpdate() {
    if (this.state.type !== this.props.match.params.type) {
      this.setState({ type: this.props.match.params.type });
      this.props.fetchProjects(this.props.match.params.type);
    }
  }

  filter = project =>
    (!this.state.filters.Search ||
      JSON.stringify(project).includes(this.state.filters.Search)) &&
    (!this.state.filters.Country ||
      project.Country === this.state.filters.Country) &&
    (!this.state.filters.State || project.State === this.state.filters.State) &&
    (!this.state.filters.Stage ||
      (project.Stage >= this.state.filters.Stage.min &&
        project.Stage <= this.state.filters.Stage.max));

  handleNotice = () => {
    this.setState({
      noticeVisible: false
    });
  };

  onFilterUpdate = filters => {
    this.setState({ filters });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.noticeVisible ? (
          <ExploreNotice handleNotice={this.handleNotice} />
        ) : null}

        <div className="container explore-wrapper">
          <div className="row">
            <ProjectsToolsComponent onFilterUpdate={this.onFilterUpdate} />
            <div className="col-sm-12 col-md-8 col-lg-9">
              <div className="Projects">
                {this.props.loading ? (
                  <PageLoading />
                ) : (
                  <div className="row">
                    {this.props.projects.length === 0 && (
                      <EmptyContent>no entry</EmptyContent>
                    )}
                    {this.props.projects.filter(this.filter).length === 0 && (
                      <EmptyContent>No project fits this criteria</EmptyContent>
                    )}
                    {this.props.projects.filter(this.filter).map(project => (
                      <ProjectsTemplate
                        data={project}
                        key={project.Index}
                        index={project.Index}
                        location={project.Location}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects.items,
  loading: state.projects.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: type => dispatch(fetchProjects(type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
