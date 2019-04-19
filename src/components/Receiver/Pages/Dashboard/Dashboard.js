import React, { Component } from 'react';
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
import { mockData } from './mockData';
import SummaryCards from '../../../General/SummaryCards/SummaryCards';
import { connect } from 'react-redux';
import { fetchReceiver } from '../../../../pages/Receiver/store/actions';
import axios from 'axios';

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
    this.props.fetchReceiver();
  };

  componentDidUpdate = prevProps => {
    if (!this.props.receiver || !this.props.receiver.U) {
      return
    }
    if (this.props.receiver !== prevProps.receiver) {
      axios
        .get(
          `https://api.openx.solar/user/balance/asset?username=${
            this.props.receiver.U.Username
          }&pwhash=${this.props.receiver.U.Pwhash}&asset=STABLEUSD`
        )
        .then(res => {
          const balance = res.data;
          if (balance.Code != 404) {
            this.setState({
              balance: Number(balance)
            });
          } else {
            this.setState({
              balance: 0
            });
          }
        });
    }
  }

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
    const receiver = this.props.receiver && this.props.receiver.U
      ? this.props.receiver
      : null;
    const projects = receiver && receiver.ReceivedSolarProjects ? receiver.ReceivedSolarProjects.length : 0;
    const receiverProject = mockData.project;
    const walletBalance = "$" + this.state.balance;
    const origPubkey = this.props.receiver && this.props.receiver.U
      ? this.props.receiver.U.PublicKey : 'mockkey'
    const publicKey = this.props.receiver && this.props.receiver.U
      ? "****" + this.props.receiver.U.PublicKey.slice(-20) : 'mockkey';
    const pkExplorerLink = "https://testnet.steexp.com/account/" + origPubkey;
    const origEthAddress = this.props.receiver && this.props.receiver.U && this.props.receiver.U.EthereumWallet
      ? this.props.receiver.U.EthereumWallet.Address : 'mockkey';
    const EthAddress = this.props.receiver && this.props.receiver.U && this.props.receiver.U.EthereumWallet
      ? "Carbon & Climate Certificates (****" + this.props.receiver.U.EthereumWallet.Address.slice(-5) + ")" : 'mockkey';
    const ethExplorerLink = "https://ropsten.etherscan.io/address/" + origEthAddress;
    const secondaryPubkey = this.props.receiver && this.props.receiver.U && this.props.receiver.U.SecondaryWallet
      ? this.props.receiver.U.SecondaryWallet.PublicKey : 'mockkey';
    const secondaryPkExplorerLink = "https://testnet.steexp.com/account/" + secondaryPubkey;
    const swytchERCs = "0" + " ERCs";
    if (!receiver || !receiver.U) {
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
    if (receiver.U.Name === "S.U. Pasto School") { // hardcode for now, change later
    return (
      <div className="receiver-dashboard">
        <div className="title-container -border">
          <div className="container">
            <h3 className="container-title">Summary</h3>
          </div>
        </div>
        {receiver && (
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
                        value: receiver.TotalEnergyCP !== 0 ? receiver.TotalEnergyCP: '845kWh',
                        desc: 'TOTAL IN CURRENT PERIOD'
                      },
                      {value: receiver.TotalEnergy !== 0 ? receiver.TotalEnergy: '10,150MWh', desc: 'ALL TIME'}
                    ]}
                    icon="solar-panel-icon"
                  />
                </div>

                <div className="col-sm-6 col-lg-3 ">
                  <SummaryCards
                    title="YOUR WALLET"
                    items={[
                      // todo: integrate this with API
                      {value: walletBalance, desc: 'PROJECT WALLET BALANCE'},
                      {value: receiver.Autoreload ? 'True' : 'False', desc: 'AUTO RE-LOAD'}
                    ]}
                    icon="wallet-icon"
                  />
                </div>
                <div className="col-sm-6 col-lg-3 ">
                  <SummaryCards
                    title="NOTIFICATIONS & ACTIONS"
                    items={[
                      // todo: integrate this with API
                      {value: 'None', desc: 'NOTIFICATION'},
                      {value: 'Confirm Auto-Pay', desc: 'ACTIONS REQUIRED'}
                    ]}
                    icon="flag-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {true && (
          <>
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
                    <h5>{receiverProject.type}</h5>
                    <h3 className="title-primary">{receiverProject.title}</h3>
                    <h6>
                      <img src={IconGps} alt="icon-gps"/>
                      <a href="https://goo.gl/maps/9U7rqrPc81A2" target="_blank" rel="noopener noreferrer">{receiverProject.loc}</a>
                    </h6>
                    <div className="flexbox">
                      <p>{receiverProject.category}</p>
                      <button><a href="https://neighborly.com" target="_blank" rel="noopener noreferrer">Neighborly Securities ></a></button>
                    </div>
                    <p>{receiverProject.description}</p>
                    <ul>
                      <li>Research Project on Smart Financing</li>
                      <li>Critical loads to the school admin's building</li>
                      <li>Grid tied and storage</li>
                    </ul>
                    <h4 className="owner">PROJECT ORIGINATOR</h4>
                    <div className="flexbox -alt">
                      <img src={AvatarPlaceholder} alt="placeholder"/>
                      <h4><a href="https://www.michaeljcasey.com/" target="_blank" rel="noopener noreferrer">Michael Casey</a></h4>
                    </div>
                    <div className="progress-bar-container">
                      <div className="flexbox -no-spacing">
                        <p className="progress-donated">
                          $ {receiverProject.donated}
                        </p>
                        <p className="progress-total">
                          U$S {receiverProject.total}
                        </p>
                      </div>
                      <ProgressBar percentage={100}/>
                    </div>
                    <div className="stats">
                      <div className="stat-container">
                        <h6>% {receiverProject.return}</h6>
                        <p>RETURN</p>
                      </div>
                      <div className="stat-container">
                        <h6>{receiverProject.benefit}%</h6>
                        <p>TAX BENEFIT</p>
                      </div>
                      <div className="stat-container">
                        <h6>{receiverProject.maturity}</h6>
                        <p>MATURITY</p>
                      </div>
                      <div className="stat-container">
                        <h6>{receiverProject.investBy}</h6>
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
                  <h3 className="title-primary">YOUR PROJECT DETAILS</h3>
                  <h4 className="sub-title">{receiverProject.title}</h4>
                  <div className="container">
                    <h4 className="section-title">Beneficiary Type</h4>
                    <DetailContainer
                      icon={IconBenef}
                      title={'You are an Offtaker'}
                      type={'0.24 ct/kWh'}
                      action={'Variable, anchored to your region'}
                    />
                    <DetailContainer
                      icon={IconBenef}
                      title={'You are the Property Owner'}
                      type={'Land & Building'}
                      action={'S.U Pasto School, Aibonito'}
                    />
                    <button className="see-more">SEE ALL PARTIES INVOLVED ></button>
                    <h4 className="section-title">Project Stage & Actions</h4>
                    <DetailContainer
                      icon={IconDeveloper}
                      title={'Stage 7: Legacy'}
                      type={'Connected'}
                      action={'You have no development action'}
                    />
                    <DetailContainer
                      icon={IconTools}
                      title={'Contractor Actions'}
                      type={'O&M'}
                      action={'No actions logged'}
                    />
                    <button className="see-more">
                      <a href="/project/4">SEE PROJECT DEVELOPMENT TIMELINE ></a>
                    </button>
                    <h4 className="section-title">Project Wallets</h4>
                    <DetailContainer
                      icon={IconWallet}
                      title={publicKey}
                      titleLink={pkExplorerLink}
                      type={walletBalance}
                      action={'Re-Loads from main account'}
                      actionLink={secondaryPkExplorerLink}
                    />
                    <DetailContainer
                      icon={IconContractor}
                      title={EthAddress}
                      titleLink={ethExplorerLink}
                      type={swytchERCs}
                      action={'Swytch.io ERC-721'}
                      actionLink="https://swytch.io"
                    />
                    <button className="see-more">
                      <a href="/profile/settings">GO TO PROFILE AND WALLET SETUP ></a>
                    </button>
                    <h4 className="section-title">Bills & Rewards</h4>
                    <DetailContainer
                      icon={IconCalendar}
                      title={'Your upcoming bill'}
                      type={'+/- $203.2'}
                      action={'Close Date: April 30'}
                    />
                    <DetailContainer
                      icon={IconCerf}
                      title={'Your system ownership'}
                      type={'35 %'}
                      action={'Estimated full acquisition: May 2021'}
                    />
                    <button className="see-more">
                      SEE PAYMENT HISTORY & OWNERSHIP RECORDS >
                    </button>
                    <h4 className="section-title">System & Device Details</h4>
                    <DetailContainer
                      icon={IconSolar}
                      title={'Jingko / Schneider'}
                      type={'1 kW | 1.25 DC/AC'}
                      action={'serial: 6UDHUI378DJDH738J39D9'}
                    />
                    <DetailContainer
                      icon={IconBox}
                      title={'Your IoT Witness Sensor'}
                      type={'OSIP | 7 rating'}
                      action={'No anomalies detected'}
                    />
                    <button className="see-more">
                      SEE ALL ASSOCIATED DEVICES & ORACLES >
                    </button>
                    <h4 className="section-title">System Output</h4>
                    <DetailContainer
                      icon={IconBenef}
                      title={'Current Output'}
                      type={'650 W'}
                      action={'11:23 am UTC -0400 Friday April 23, 2019'}
                    />
                    <div className="SolarGraph">
                      <img src={IconSolarAlt} alt="solar"/>
                      <div className="graph-wrapper">
                        <img src={GraphPlaceholder} alt="solar"/>
                      </div>
                      <div className="switch-buttons">
                        <button
                          className={
                            this.state.activeButton === 'day' ? '-active' : ''
                          }
                          onClick={() => this.onButtonClick('day')}
                        >
                          DAY
                        </button>
                        <button
                          className={
                            this.state.activeButton === 'month' ? '-active' : ''
                          }
                          onClick={() => this.onButtonClick('month')}
                        >
                          MONTH
                        </button>
                        <button
                          className={
                            this.state.activeButton === 'year' ? '-active' : ''
                          }
                          onClick={() => this.onButtonClick('year')}
                        >
                          YEAR
                        </button>
                      </div>
                    </div>
                    <button className="see-more">DOWNLOAD DATASET ></button>
                  </div>
                </div>
                <div className="contracts-container">
                  <div className="container">
                    <h3 className="title-primary">
                      YOUR PROJECT’S SMART SOLAR CONTRACTS
                    </h3>
                    {/*todo: integrate*/}
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
          </>
        )}
      </div>
    );
  }
  }
}

const mapStateToProps = state => ({
  receiver: state.receiver.items
});

const mapDispatchToProps = dispatch => ({
  fetchReceiver: () => dispatch(fetchReceiver())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
