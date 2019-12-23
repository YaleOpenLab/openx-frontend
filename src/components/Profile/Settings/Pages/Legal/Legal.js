import React, {Component} from "react";
import SwitchButton from "../../../../General/SwitchButton/SwitchButton";
import SeeMore from "../../../../UI/SeeMore/SeeMore";
import Button from "../../../../UI/SolarForms/Button/Button";
import ROUTES from "../../../../../routes/routes";
import CustomLink from "../../../../UI/CustomLink/CustomLink";

class Legal extends Component {
	state = {
		agreeTerms: false,
		legalRelease1: false,
		legalRelease2: false,
		legalRelease3: false,
		legalRelease4: false,
	};

	handleToggleChange = key => {
		this.setState(prevState => ({
			[key]: !prevState[key]
		}));
	};

	handleExplore = () => {

	};

	render() {
		return (
			<div className="ProfilePreferences">
				<div className="row">
					<div className="col-12 col-md-10 col-lg-8 mx-auto ">
						<div className="component-box-title component-header">
							<span className="-darker">Required Legal Disclaimers</span>
						</div>
						<div className="component-box-text">
							<span className='--highlight'>Why? </span>
							Everyone operating through the opensolar platform needs to agree to required terms & conditions, as well
							as specific legal releases.
						</div>
						<CustomLink label='See the General Legal Section >' />
					</div>
					<div className="col-12 col-md-10 col-lg-8 mx-auto ">
						<div className="col-12 solar-form-separator"/>
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-md-10 col-lg-8 mx-auto">
						<div className="component-box-title component-header">
							<span className="-darker">Terms & Conditions</span>
						</div>
						<p className="component-box-text bigger-text">
							We are building an open source platform that leverages decentralization technology for disintermediation
							of financial processes and contractual automation to drive community-owned solar projects.
						</p>
						<p className="component-box-text bigger-text">
							OpenSolar’s core technology seeks to streamline the flow of crowd-based funds (eg. bonds and equity) to
							finance the deployment of solar assets, allowing end-users to own these resources in a short time frame
							through regular utility-like payments driven by energy generation and consumption IoT data.
						</p>
						<p className="component-box-text bigger-text">
							This project is a collaboration between the Digital Currency Initiative at the MIT Media Lab, and the Open
							Innovation Lab at the Tsai Center for Innovative Thinking at Yale. This platform was inspired by the
							impacts that hurricanes Irma and Maria has on the Puerto Rican electrical grid in 2017.
						</p>
						<SwitchButton
							label={<SeeMore infoContent={'More info or content goes here'}>I agree with the above statement</SeeMore>}
							checked={this.state.agreeTerms}
							handleChange={() => this.handleToggleChange("agreeTerms")}
						/>
					</div>

					<div className="col-12 col-md-10 col-lg-8 mx-auto">
						<div className="col-12 solar-form-separator"/>
					</div>

					<div className="col-12 col-md-10 col-lg-8 mx-auto">
						<SwitchButton
							label={<SeeMore infoContent={<div style={{fontSize: 12}}> More info </div>}>Legal release 1</SeeMore>}
							checked={this.state.legalRelease1}
							handleChange={() => this.handleToggleChange("legalRelease1")}
						/>
						<SwitchButton
							label={<SeeMore infoContent={<div style={{fontSize: 12}}> More info </div>}>Legal release 2</SeeMore>}
							checked={this.state.legalRelease2}
							handleChange={() => this.handleToggleChange("legalRelease2")}
						/>
						<SwitchButton
							label={<SeeMore infoContent={<div style={{fontSize: 12}}> More info </div>}>Legal release 3</SeeMore>}
							checked={this.state.legalRelease3}
							handleChange={() => this.handleToggleChange("legalRelease3")}
						/>
						<SwitchButton
							label={<SeeMore infoContent={<div style={{fontSize: 12}}> More info </div>}>Legal release 4</SeeMore>}
							checked={this.state.legalRelease4}
							handleChange={() => this.handleToggleChange("legalRelease4")}
						/>
					</div>

					<div className="col-12 col-md-10 col-lg-8 mx-auto">
						<div className="col-12 solar-form-separator"/>
					</div>

					<div className="col-12 col-md-10 col-lg-8 mx-auto">
						<div className="row">
							<div className="col-6">
								<Button
									variant='reverse'
									link={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.PREFERENCES}
									label='back'
								/>
							</div>
							<div className="col-6">
								<Button
									action={this.handleExplore}
									label='explore'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Legal;
