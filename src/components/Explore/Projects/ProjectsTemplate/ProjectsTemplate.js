import React, { Component } from "react";
import { NavLink } from "mdbreact";
import ROUTES from "../../../../routes/routes";
import DescriptionGrid from "../../../General/DescriptionGrid/DescriptionGrid";
import ProgressBar from "../../../General/ProgressBar/ProgressBar";
import percentage from "../../../../helpers/functions/percentage";
import { Http } from "../../../../services/Http";

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
        <div className="projects-box">
          <NavLink
            to={ROUTES.PROJECT_BASE + this.props.data.Index}
            className="no-padding"
          >
            <div className="projects-image-box">
              <button className="watch-button-explore" type="button">
                <div className="watch-icon" />
              </button>
              <img src={this.props.imageUrl} alt={this.props.title} />
            </div>
          </NavLink>
          <div className="projects-description-box">
            <div className="row">
              <div className="col-12 desc-status">
                Stage {this.props.data.Stage} | {this.props.status}
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
              </div>
              <div className="col-6 desc-category">
                {this.props.data.InvestmentType}
              </div>
              <div className="col-6 desc-category">{this.state.originator}</div>
              <div className="desc-description col-12">
                {this.props.metadata}
                <ul>
                  <li>{this.props.data.Bullet1}</li>
                  <li>{this.props.data.Bullet2}</li>
                  <li>{this.props.data.Bullet3}</li>
                </ul>
              </div>
              <DescriptionGrid
                list={[
                  { value: "3 kW", desc: "solar", type: "base" },
                  { value: "0 kWh", desc: "storage" },
                  { value: "0.0", desc: "tariff" },
                  { value: "1/7", desc: "stage" }
                ]}
              />
              <DescriptionGrid
                list={[
                  { value: "0%", desc: "return", type: "blue" },
                  { value: "n/a", desc: "rating" },
                  { value: "n/a", desc: "tax" },
                  { value: "2008", desc: "eta", icon: true }
                ]}
              />
              <div className="col-12 specifics-box">
                <div className="row">
                  <div className="col-6 spec-first-price">
                    {this.props.data.MoneyRaised}
                  </div>
                  <div className="col-6 spec-second-price">
                    {this.props.data.TotalValue}
                  </div>
                  <div className="col-12 ">
                    <ProgressBar
                      progress={percentage(
                        this.props.data.MoneyRaised,
                        this.props.data.TotalValue
                      )}
                      label="4"
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
