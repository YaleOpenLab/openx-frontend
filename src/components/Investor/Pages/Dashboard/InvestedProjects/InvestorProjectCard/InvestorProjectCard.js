import React, { Component } from "react";
import "./InvestorProjectCard.scss";
import { NavLink } from "react-router-dom";
import ROUTES from "../../../../../../routes/routes";
import SummaryCards from "../../../../../General/SummaryCards/SummaryCards";
import { connect } from "react-redux";
import { fetchProjects } from "../../../../../Explore/Projects/store/actions";
import PageLoading from "../../../../../General/Loading/Loading";

class InvestorProjectCard extends Component {
  componentDidMount = () => {
    this.props.fetchProjects();
  };

  render() {
    const { project, loading } = this.props;
    if (!project || loading) return <PageLoading />;

    return (
      <div className="col-12 col-sm-6 col-md-4 investor-project-card">
        <div className="projects-box">
          <NavLink
            to={ROUTES.PROJECT_BASE + project.Index}
            className="no-padding"
          >
            <div className="projects-image-box">
              <button className="watch-button-explore" type="button">
                <div className="watch-icon" />
              </button>
              <img src={project.Image} alt="project card" />
            </div>
          </NavLink>
          <div className="projects-description-box">
            <div className="row">
              <div className="col-12 desc-status">
                STAGE {project.StageDescription}
              </div>
              <div className="col-12 desc-title">
                <NavLink
                  className="no-padding"
                  to={ROUTES.PROJECT_BASE + project.Index}
                >
                  {project["Project Name"]}
                </NavLink>
              </div>
              <div className="col-12 desc-location">
                <div className="projects-location-icon location-icon" />
                <a href={"#"}>{project.Location}</a>
              </div>
              <div className="col-12 desc-spec-value">{project.Capacity}</div>
              <div className="col-12 desc-category">CAPACITY</div>
            </div>
          </div>
          <SummaryCards
            items={[
              { value: project["Your Investment"], desc: "your investment" },
              { value: project["Your Return"], desc: "your return" },
              {
                value: project["Investment Rating"],
                desc: "investment rating"
              },
              { value: project["Impact Rating"], desc: "Impact Rating" },
              { value: project["Project Actions"], desc: "project actions" }
            ]}
          />
          <NavLink
            className="no-padding"
            to={ROUTES.PROJECT_BASE + project.Index}
          >
            <div className="desc-see-full-project">See Full Project Page ></div>
          </NavLink>
        </div>
      </div>
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
)(InvestorProjectCard);
