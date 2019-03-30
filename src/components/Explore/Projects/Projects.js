import React, { Component } from "react";
import "./Projects.scss";
import ProjectsToolsComponent from "../ProjectsToolsComponent/ProjectsToolsComponent";
import ProjectsTemplate from "./ProjectsTemplate/ProjectsTemplate";
import connect from "react-redux/es/connect/connect";
import { fetchProjects } from "./store/actions";
import ExploreNotice from "./ExploreNotice/ExploreNotice";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noticeVisible: !localStorage.getItem("exploreNotice"),
      type: null
    };
  }

  componentDidMount() {
    this.setState({type: this.props.match.params.type});
    this.props.fetchProjects(this.props.match.params.type);
  }

  componentDidUpdate() {
    if (this.state.type !== this.props.match.params.type) {
      this.setState({type: this.props.match.params.type});
      this.props.fetchProjects(this.props.match.params.type);
    }
  }

  handleNotice = () => {
    this.setState({
      noticeVisible: false
    })
  };

  render() {
    return (
      <React.Fragment>
        {this.state.noticeVisible ? <ExploreNotice handleNotice={this.handleNotice}/> : null}

        <div className="container explore-wrapper">
          <div className="row">
            <ProjectsToolsComponent />
            <div className="col-sm-12 col-md-8 col-lg-9">
              <div className="Projects">
                <div className="row">
                  {this.props.projects.map(project => (
                    <ProjectsTemplate
                      data={project}
                      key={project.Index}
                      index={project.Index}
                      location={project.Location}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ projects: state.projects.items });

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: type => dispatch(fetchProjects(type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
