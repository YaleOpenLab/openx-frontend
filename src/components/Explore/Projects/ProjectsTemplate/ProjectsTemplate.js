import React, { Component } from "react";
import { NavLink } from "mdbreact";
import ROUTES from "../../../../routes/routes";
import ProgressBar from "../../../General/ProgressBar/ProgressBar";
import percentage from "../../../../helpers/functions/percentage";
import { Http } from "../../../../services/Http";
import ShowMoreText from "../../../General/ShowMoreText/ShowMoreText";
import { STAGES } from "../../../../helpers/enums/stages";

class ProjectsTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originator: ""
    };
  }

  componentDidMount = () => {
    this.originatorSub = Http.originatorGet(
      this.props.data.OriginatorIndex
    ).subscribe(originator => {
      this.setState({
        originator: originator.data.Name
      });
    });
  };

  componentWillUnmount = () => {
    this.originatorSub.unsubscribe();
  };

  render() {
    return (
      <div className="col-sm-12 col-md-6">
        <div className="projects-box-explore">
          <NavLink
            to={ROUTES.PROJECT_BASE + this.props.data.Index}
            className="no-padding"
          >
            <div className="projects-image-box">
              <button className="watch-button-explore" type="button">
                <div className="watch-icon" />
              </button>
              <img
                src={this.props.data.DPIntroImage}
                alt={this.props.data.Name}
              />
            </div>
          </NavLink>
          <div className="projects-description-box">
            <div className="row">
              <div className="col-12 desc-status">
                Stage {this.props.data.Stage} | {STAGES[this.props.data.Stage]}
              </div>
              <div className="col-12 desc-title">
                <NavLink
                  className="no-padding"
                  to={ROUTES.PROJECT_BASE + this.props.data.Index}
                >
                  {this.props.data.Name}
                </NavLink>
              </div>
              <div className="desc-location col-12">
                <div className="projects-location-icon location-icon" />
                {this.props.data.State}
                {this.props.data.State && this.props.data.Country ? ", " : ""}
                {this.props.data.Country}
              </div>
              <div className="col-6 desc-category">
                {this.props.data.InvestmentType}
              </div>
              <div className="col-6 desc-category">{this.state.originator}</div>
              <div className="desc-description col-12">
                <div className="desc-description-text">
                  <ShowMoreText
                    moreText="Show More"
                    lessText="Show Less"
                    lines={3}
                  >
                    {this.props.data.Metadata}
                  </ShowMoreText>
                </div>
                <div className="desc-description-bullets">
                  <ul>
                    <li>{this.props.data.Bullets.Bullet1}</li>
                    <li>{this.props.data.Bullets.Bullet2}</li>
                    <li>{this.props.data.Bullets.Bullet3}</li>
                  </ul>
                </div>
              </div>
              <div className="col-12 specifics-box-no-mg">
                <div className="projects-description__stats">
                  <div className="-primary-color">
                    <p>{this.props.data.ExplorePageSummary.Solar}</p>
                    <h6>Solar</h6>
                  </div>
                  <div>
                    <p>{this.props.data.ExplorePageSummary.Storage}</p>
                    <h6>Storage</h6>
                  </div>
                  <div>
                    <p>
                      {this.props.data.ExplorePageSummary.Tariff.split(" ")[0]}
                      <span className="stats-units">
                        {this.props.data.ExplorePageSummary.Tariff.split(" ")[1]}
                      </span>
                    </p>
                    <h6>Tariff</h6>
                  </div>
                  <div>
                    <p>{this.props.data.ExplorePageSummary.Stage}</p>
                    <h6>Stage</h6>
                  </div>
                </div>
              </div>
              <div className="col-12 specifics-box-no-mg">
                <div className="projects-description__stats">
                  <div className="-blue-color">
                    <p>{this.props.data.ExplorePageSummary.Return}</p>
                    <h6>Return</h6>
                  </div>
                  <div>
                    <p>{this.props.data.ExplorePageSummary.Rating}</p>
                    <h6>Rating</h6>
                  </div>
                  <div>
                    <p>{this.props.data.ExplorePageSummary.Tax}</p>
                    <h6>Tax</h6>
                  </div>
                  <div>
                    <p>{this.props.data.ExplorePageSummary.ETA}</p>
                    <h6>ETA</h6>
                  </div>
                </div>
              </div>
              <div className="col-12 specifics-box">
                <div className="row">
                  <div className="col-6 spec-first-price">
                    ${this.props.data.MoneyRaised}
                  </div>
                  <div className="col-6 spec-second-price">
                    ${this.props.data.TotalValue}
                  </div>
                  <div className="col-12 ">
                    <ProgressBar
                      progress={percentage(
                        this.props.data.MoneyRaised,
                        this.props.data.TotalValue
                      )}
                      label={"4" + ' Bakers'}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsTemplate;
