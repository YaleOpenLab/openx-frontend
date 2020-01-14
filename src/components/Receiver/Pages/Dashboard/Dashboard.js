import React, {Component} from 'react';
import IconBenef from '../../../../assets/images/ic-beneficiary.svg';
import IconWallet from '../../../../assets/images/ic-wallet.svg';
import IconSolar from '../../../../assets/images/ic-solar-panel.svg';
import IconSolarAlt from '../../../../assets/images/ic-solar-alt.svg';
import Placeholder from '../../../../assets/images/solars.png';
import IconGps from '../../../../assets/images/ic-location-min.svg';
import iconWatch from '../../../../assets/images/ic-watch.svg';
import IconTools from '../../../../assets/images/ic-tools.svg';
import IconCerf from '../../../../assets/images/ic-certified.svg';
import IconCalendar from '../../../../assets/images/ic-calendar.svg';
import IconDeveloper from '../../../../assets/images/ic-developer.svg';
import IconContractor from '../../../../assets/images/ic-contractor.svg';
import IconBox from '../../../../assets/images/ic-solarbox.svg';
import IconArchive from '../../../../assets/images/ic-doc-archive.svg';
import IconSingle from '../../../../assets/images/ic-single.svg';
import IconChecked from '../../../../assets/images/ic-doc-checked.svg';
import IconUnChecked from '../../../../assets/images/ic-doc-unchecked.svg';
import AvatarPlaceholder from '../../../../assets/images/avatarplaceholder.png';
import GraphPlaceholder from '../../../../assets/images/graph-placeholder.png';
import ProgressBar from './ProgressBar';
import DetailContainer from './DetailContainer';
import './Dashboard.scss';
import DocumentationContainer from '../../../General/DocumentationContainer/DocumentationContainer';
import {mockData} from './mockData';
import {rwanda} from './rwanda';
import SummaryCards from '../../../General/SummaryCards/SummaryCards';
import {connect} from 'react-redux';
import {validateAction} from "../../../Profile/store/actions";
import Storage from "../../../../services/Storage";
import NotAvailable from "../../../UI/NotAvailable/NotAvailable";

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeButton: 'day',
			dropdown: false,
			documentation: [
				{
					title: 'Project Overview',
					sub: 'PROJECT PORTFOLIO',
					icon: IconArchive
				},
				{
					title: 'PPA',
					sub: 'CONTRACT',
					icon: IconSingle
				},
				{
					title: 'RE Certification Agreement',
					sub: 'RECs',
					icon: IconSingle
				},
				{
					title: 'Guarantor Agreements',
					sub: 'INVESTOR PROTECTIONS',
					icon: IconArchive
				},
				{
					title: 'Contractors Agreement',
					sub: 'DEVELOPER',
					icon: IconArchive
				},
				{
					title: 'Stakeholder Agreement',
					sub: 'STAKEHOLDERS',
					icon: IconSingle
				},
				{
					title: 'Community Energy Charter',
					sub: 'INVESTOR PROTECTIONS',
					icon: IconSingle
				},
				{
					title: 'Financial Reportings',
					sub: 'PROJECT FINANCIALS',
					icon: IconArchive
				}
			],
			review: [
				{
					icon: IconChecked,
					label: 'Link >'
				},
				{
					icon: IconChecked,
					label: 'Link >'
				},
				{
					icon: IconChecked,
					label: 'Link >'
				},
				{
					icon: IconChecked,
					label: 'Link >'
				},
				{
					icon: IconUnChecked,
					label: 'Developer >'
				},
				{
					icon: IconUnChecked,
					label: 'Developer >'
				},
				{
					icon: IconUnChecked,
					label: 'Developer >'
				}
			]
		};
	}

	componentDidMount = () => {
		this.props.fetchReceiver("recipient", Storage.get("username"));
	};

	onButtonClick = active => {
		this.setState({
			activeButton: active
		});
	};

	handleDropdown = () => {
		this.setState({
			dropdown: !this.state.dropdown
		});
	};

	render() {
		const {authorized, receiver} = this.props;
		if (this.props.receiver && !this.props.authorized) {
			return <NotAvailable text={"You have not registered as a receiver"}/>
		}

		const projects = receiver && receiver.ReceivedSolarProjects ? receiver.ReceivedSolarProjects.length : 0;
		const temp = rwanda.project;

		if (!authorized) {
			return (
				<div className="receiver-dashboard">
					<div className="title-container -border">
						<div className="container">
							<h3 className="container-title">You have not registered as a recipient</h3>
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
										{value: receiver.U.Name, desc: 'beneficiary name'},
										{value: projects, desc: 'active projects'}
									]}
									icon="beneficiary-icon"
								/>
							</div>
							<div className="col-sm-6 col-lg-3 ">
								<SummaryCards
									title="your energy"
									items={[
										{
											value: '0kWh',
											desc: 'TOTAL IN CURRENT PERIOD'
										},
										{value: '0MWh', desc: 'ALL TIME'}
									]}
									icon="solar-panel-icon"
								/>
							</div>

							<div className="col-sm-6 col-lg-3 ">
								<SummaryCards
									title="YOUR WALLET"
									items={[
										{value: '$0', desc: 'PROJECT WALLET BALANCE'},
										{value: 'Inactive', desc: 'AUTO RE-LOAD'}
									]}
									icon="wallet-icon"
								/>
							</div>
							<div className="col-sm-6 col-lg-3 ">
								<SummaryCards
									title="NOTIFICATIONS & ACTIONS"
									items={[
										{value: 'None', desc: 'NOTIFICATION'},
										{value: 'Confirm Auto-Pay', desc: 'ACTIONS REQUIRED'}
									]}
									icon="flag-icon"
								/>
							</div>
						</div>
					</div>
				</div>
				{!projects ?
					<div className="container">
						<h3 className="container-title">You don't have any projects</h3>
					</div>
					:
				<div>
					<div className="title-container -border">
						<div className="container">
							<h3 className="container-title">Your Projects</h3>
						</div>
					</div>
					<div className="projects-section">
						<div className="container">
							<div className="row no-gutters">
								<div className="col-lg-7 media-right">
									<img src={Placeholder} alt="placeholder"/>
								</div>
								<div className="col-lg-5 media-left">
									<button className="watch-button">
										<img src={iconWatch} alt="watch-icon"/>
									</button>
									<h5>{temp.type}</h5>
									<h3 className="title-primary">{temp.title}</h3>
									<h6>
										<img src={IconGps} alt="icon-gps"/>
										<a href="https://goo.gl/maps/x8Cpr1C37V6ckHNLA" target="_blank"
											 rel="noopener noreferrer">{temp.loc}</a>
									</h6>
									<div className="flexbox">
										<p>{temp.category}</p>
										<button><a href="https://neighborly.com" target="_blank" rel="noopener noreferrer">Bond Issuer
											></a></button>
									</div>
									<p>{temp.description}</p>
									<ul>
										<li>{temp.bullets[0]}</li>
										<li>{temp.bullets[1]}
										</li>
										<li>{temp.bullets[2]}</li>
									</ul>
									<h4 className="owner">PROJECT ORIGINATOR</h4>
									<div className="flexbox -alt">
										<img src={AvatarPlaceholder} alt="placeholder"/>
										<h4>{temp.originator}</h4>
									</div>
									<div className="progress-bar-container">
										<div className="flexbox -no-spacing">
											<p className="progress-donated">
												$ {temp.donated}
											</p>
											<p className="progress-total">
												U$S {temp.total}
											</p>
										</div>
										<ProgressBar percentage={0}/>
									</div>
									<div className="stats">
										<div className="stat-container">
											<h6>{temp.return}</h6>
											<p>RETURN</p>
										</div>
										<div className="stat-container">
											<h6>{temp.benefit}%</h6>
											<p>TAX BENEFIT</p>
										</div>
										<div className="stat-container">
											<h6>{temp.maturity}</h6>
											<p>MATURITY</p>
										</div>
										<div className="stat-container">
											<h6>{temp.investBy}</h6>
											<p>INVEST BY</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{this.state.dropdown && (
						<div className="dropdown-wrapper">
							<div className="details-container">
								<h3 className="title-primary desc">{temp.title} DETAILS</h3>
								<div className="container">
									<h4 className="section-title">Role</h4>
									<DetailContainer
										icon={IconBenef}
										title={'You are an Offtaker'}
									/>
									<button className="see-more">SEE ALL PARTIES INVOLVED ></button>
									<h4 className="section-title">Project Stage & Actions</h4>
									<DetailContainer
										icon={IconDeveloper}
										title={'Project is in Stage: 7'}
									/>
									<DetailContainer
										icon={IconTools}
										title={'Contractor Actions'}
										action={'No pending action'}
									/>
									<button className="see-more">
										<a href={void(0)}>SEE PROJECT DEVELOPMENT TIMELINE ></a>
									</button>
									<h4 className="section-title">Project Wallets</h4>
									<DetailContainer
										icon={IconWallet}
										title={"Carbon & Climate Certificates (****" + receiver.U.SecondaryWallet.PublicKey.slice(-5) + ")"}
										titleLink={'#'}
										action={'0'}
										actionLink={"https://testnet.steexp.com/account/" + receiver.U.SecondaryWallet.PublicKey}
									/>
									<DetailContainer
										icon={IconContractor}
										title={"Carbon & Climate Certificates (****" + receiver.U.StellarWallet.PublicKey.slice(-5) + ")"}
										titleLink={"https://ropsten.etherscan.io/address/" + receiver.U.StellarWallet.PublicKey}
										action={'0'}
										actionLink="https://swytch.io"
									/>
									<button className="see-more">
										<a href={void(0)}>GO TO PROFILE AND WALLET SETUP ></a>
									</button>
									<h4 className="section-title">Bills & Rewards</h4>
									<DetailContainer
										icon={IconCalendar}
										title={'Your pending payment'}
										action={'$203 due on April 30'}
									/>
									<button className="see-more">
										<a href='#' target="_blank" rel="noopener noreferrer">SEE PAST PAYMENTS ></a>
									</button>
								</div>
							</div>
							<div className="contracts-container">
								<div className="container">
									<h3 className="title-primary desc">
										DOCUMENTATION AND SMART CONTRACTS
									</h3>
									<DocumentationContainer documents={[]}/>
								</div>
							</div>
						</div>
					)}
					<button
						className="display-button"
						onClick={() => this.handleDropdown()}
					>
						{this.state.dropdown ? 'SHOW LESS' : 'SHOW MORE'}
					</button>
				</div>}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	receiver: state.profile.recipient.items,
	loading: state.profile.recipient.isLoading,
	authorized: state.profile.recipient.authorized,
});

const mapDispatchToProps = dispatch => ({
	fetchReceiver: (entity, username) => dispatch(validateAction(entity, username))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Dashboard);
