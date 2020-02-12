import React, {Component} from 'react';
import './Dashboard.scss';
import SummaryCards from '../../../General/SummaryCards/SummaryCards';
import {connect} from 'react-redux';
import {dashboardAction} from "../../../Profile/store/actions";
import Storage from "../../../../services/Storage";
import NotAvailable from "../../../UI/NotAvailable/NotAvailable";
import ReceiverProject from "../../../Receiver/Pages/Dashboard/ReceiverProject";

class Dashboard extends Component {
	componentDidMount = () => {
		this.props.fetchDeveloperDB("developer", Storage.get("username"));
	};

	render() {
		const {authorized, developer} = this.props;
		console.log(developer, authorized);
		if (this.props.developer && !this.props.authorized) {
			return <NotAvailable text={"You have not registered as a developer"}/>
		}

		const projects = developer["YourProjects"];

		if (!authorized || !developer) {
			return (
				<div className="receiver-dashboard">
					<div className="title-container -border">
						<div className="container">
							<h3 className="container-title">You have not registered as a developer</h3>
						</div>
					</div>
				</div>
			);
		}

		return (
			<div className="receiver-dashboard">
                <div className="title-container -border">
                    <div className="container">
                        <h3 className="container-title">Summary</h3>
                    </div>
                </div>
                <div className="profile-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-lg-3 ">
                                <SummaryCards
                                    title="your profile"
                                    items={[
                                        {value: developer["Your Profile"] && developer["Your Profile"].Name, desc: 'beneficiary name'},
                                        {value: developer["Your Profile"] && developer["Your Profile"]["Active Projects"], desc: 'active projects'}
                                    ]}
                                    icon="beneficiary-icon"
                                />
                            </div>
                            <div className="col-sm-6 col-lg-3 ">
                                <SummaryCards
                                    title="your energy"
                                    items={[
                                        {
                                            value: developer["Your Energy"] && developer["Your Energy"]["Total in Current Period"],
                                            desc: 'TOTAL IN CURRENT PERIOD'
                                        },
                                        {value: developer["Your Energy"] && developer["Your Energy"]["All Time"], desc: 'ALL TIME'}
                                    ]}
                                    icon="solar-panel-icon"
                                />
                            </div>

                            <div className="col-sm-6 col-lg-3 ">
                                <SummaryCards
                                    title="YOUR WALLET"
                                    items={[
                                        {value: developer["Your Wallet"] ? developer["Your Wallet"]["Project Wallet Balance"] : '$0', desc: 'PROJECT WALLET BALANCE'},
                                        {value: developer["Your Wallet"] ? developer["Your Wallet"]["Auto Reload"] : 'Inactive', desc: 'AUTO RE-LOAD'}
                                    ]}
                                    icon="wallet-icon"
                                />
                            </div>
                            <div className="col-sm-6 col-lg-3 ">
                                <SummaryCards
                                    title="NOTIFICATIONS & ACTIONS"
                                    items={[
                                        {value: developer["Notifications & Actions"] ? developer["Notifications & Actions"]["Notification"] : 'None', desc: 'NOTIFICATION'},
                                        {value:  developer["Notifications & Actions"] ? developer["Notifications & Actions"]["Actions Required"] : 'None', desc: 'ACTIONS REQUIRED'}
                                    ]}
                                    icon="flag-icon"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                    {!projects ?
                        <div className="container" style={{marginBottom: 40}}>
                            <NotAvailable text={"You don't have any projects"}/>
                        </div>
                        :
                        <div>
                            <div className="title-container -border">
                                <div className="container">
                                    <h3 className="container-title">Your Projects</h3>
                                </div>
                            </div>
                            {projects.map(project => {
                                return <ReceiverProject data={project} />
                            })}
                        </div>
                    }
        </div>
		);
	}
}

const mapStateToProps = state => ({
	developer: state.profile.developer.dashboard,
	loading: state.profile.entity.isLoading,
	authorized: state.profile.developer.authorized,
});

const mapDispatchToProps = dispatch => ({
    fetchDeveloperDB: (entity, username) => dispatch(dashboardAction(entity, username))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Dashboard);
