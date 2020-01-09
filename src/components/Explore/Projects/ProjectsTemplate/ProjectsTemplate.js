import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import ROUTES from "../../../../routes/routes";
import ProgressBar from "../../../General/ProgressBar/ProgressBar";
import percentage from "../../../../helpers/functions/percentage";
import {Http} from "../../../../services/Http";
import ShowMoreText from "../../../General/ShowMoreText/ShowMoreText";
import {STAGES} from "../../../../helpers/enums/stages";

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
		var investors = 0; // to handle cases where the number of investors associated with a project is zero
		if (this.props.data.InvestorIndices != null) {
			investors = this.props.data.InvestorIndices.length;
		}
		return (
			<div className="col-sm-12 col-md-6">
				<div className="projects-box-explore">
					<NavLink
						to={ROUTES.PROJECT_BASE + this.props.data.Index}
						className="no-padding"
					>
						<div className="projects-image-box">
							<button className="watch-button-explore" type="button">
								<div className="watch-icon"/>
							</button>
							<img
								src="https://via.placeholder.com/550x350"
								alt={this.props.data.Name}
							/>
						</div>
					</NavLink>
					<div className="projects-description-box">
						<div className="row">
							<div className="col-12 desc-status">
								Stage 7 | {STAGES[7]}
							</div>
							<div className="col-12 desc-title">
								<NavLink
									className="no-padding"
									to={ROUTES.PROJECT_BASE + this.props.data.Index}
								>
									Pasto Public School - PoC 1kW
								</NavLink>
							</div>
							<div className="desc-location col-12">
								<div className="projects-location-icon location-icon"/>
								Aibonito, Puerto Rico, USA.
								{/*{this.props.data.State}*/}
								{/*{this.props.data.State && this.props.data.Country ? ", " : ""}*/}
								{/*{this.props.data.Country}*/}
							</div>
							<div className="col-6 desc-category">
								Donation
								{/*{this.props.data.InvestmentType}*/}
							</div>
							<div className="col-6 desc-category">
								Yale / MIT
								{/*{this.state.originator}*/}
							</div>
							<div className="desc-description col-12">
								<div className="desc-description-text">
									<ShowMoreText
										moreText="Show More"
										lessText="Show Less"
										lines={3}
									>
										Installation of a proof-of-concept 1kW solar in the admin building of the Past public school. System
										has internet connected devices that can securely connect to a blockchain smart contract.
										{/*{this.props.data.Metadata}*/}
									</ShowMoreText>
								</div>
								<div className="desc-description-bullets">
									<ul>
										<li>Research project on smart financing</li>
										<li>Critical loads to the Admin Building</li>
										<li>Grid-tied and storage</li>
									</ul>
								</div>
							</div>
							<div className="col-12 specifics-box-no-mg">
								<div className="projects-description__stats">
									<div className="-primary-color">
										<p>1 kW</p>
										<h6>Solar</h6>
									</div>
									<div>
										<p>250 Wh</p>
										<h6>Storage</h6>
									</div>
									<div>
										<p>
											0.0
											<span className="stats-units">
                        $/kWh
                      </span>
										</p>
										<h6>Tariff</h6>
									</div>
									<div>
										<p>7</p>
										<h6>Stage</h6>
									</div>
								</div>
							</div>
							<div className="col-12 specifics-box-no-mg">
								<div className="projects-description__stats">
									<div className="-blue-color">
										<p>0%</p>
										<h6>Return</h6>
									</div>
									<div>
										<p>n/a</p>
										<h6>Rating</h6>
									</div>
									<div>
										<p>n/a</p>
										<h6>Tax</h6>
									</div>
									<div>
										<p>2025</p>
										<h6>AQUISITION</h6>
									</div>
								</div>
							</div>
							<div className="col-12 specifics-box">
								<div className="row">
									<div className="col-6 spec-first-price">
										$1000
									</div>
									<div className="col-6 spec-second-price">
										$4000
									</div>
									<div className="col-12 ">
										<ProgressBar
											progress={percentage(
												1000,
												4000
											)}
											label={`${investors} backers`}
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
