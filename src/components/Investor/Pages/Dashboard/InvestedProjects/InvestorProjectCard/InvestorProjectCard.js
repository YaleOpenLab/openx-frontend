import React, { Component } from "react";
import "./InvestorProjectCard.scss";
import { NavLink } from "react-router-dom";
import ROUTES from "../../../../../../routes/routes";
import SummaryCards from "../../../../../General/SummaryCards/SummaryCards";
import { connect } from "react-redux";
import { fetchProjects } from "../../../../../Explore/Projects/store/actions";
import PageLoading from "../../../../../General/Loading/Loading";
import { STAGES } from "../../../../../../helpers/enums/stages";

class InvestorProjectCard extends Component {
  componentDidMount = () => {
    this.props.fetchProjects();
  };

  render() {
    const {project, loading, investor} = this.props;
    if(!project || loading) return <PageLoading />;
    console.log(project, "???")
    return (
      <div className="col-12 col-sm-6 col-md-4 investor-project-card">
        <div className="projects-box">
          <NavLink
            to={ROUTES.PROJECT_BASE + this.props.projectId}
            className="no-padding"
          >
            <div className="projects-image-box">
              <button className="watch-button-explore" type="button">
                <div className="watch-icon" />
              </button>
              <img src={project.MainImage} alt="project card" />
            </div>
          </NavLink>
          <div className="projects-description-box">
            <div className="row">
              <div className="col-12 desc-status">Stage {project.Stage} | {STAGES[project.Stage]}</div>
              <div className="col-12 desc-title">
                <NavLink
                  className="no-padding"
                  to={ROUTES.PROJECT_BASE + project.Index}
                >
                  {project.Name}
                </NavLink>
              </div>
              <div className="col-12 desc-location">
                <div className="projects-location-icon location-icon" />
                <a href={project.MapLink}>{project.State}, {project.Country}</a>
              </div>
              <div className="col-12 desc-spec-value">0</div>
              <div className="col-12 desc-category">RESEARCH PROJECT</div>
            </div>
          </div>
          <SummaryCards
            items={[
              { value: investor.AmountInvested, desc: "your investment" },
              { value: 0, desc: "your return" },
              { value: 0, desc: "investment rating" },
              { value: 0, desc: "community value" },
              { value: "No immediate action", desc: "project actions" }
            ]}
          />
          <NavLink
            className="no-padding"
            to={ROUTES.PROJECT_BASE + this.props.projectId}
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
