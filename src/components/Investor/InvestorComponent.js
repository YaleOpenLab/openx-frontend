import React from "react";
import IconBenef from '../../assets/images/ic-beneficiary.svg';
import IconWallet from '../../assets/images/ic-wallet.svg';
import IconFlag from '../../assets/images/ic-flag.svg';
import IconSolar from '../../assets/images/ic-solar.svg';
import IconSolarAlt from '../../assets/images/ic-solar-alt.svg';
import Placeholder from '../../assets/images/solars.png';
import IconGps from '../../assets/images/ic-location-min.svg';
import iconWatch from '../../assets/images/ic-watch.svg';
import IconTools from '../../assets/images/ic-tools.svg';
import IconCerf from '../../assets/images/ic-certified.svg';
import IconCalendar from '../../assets/images/ic-calendar.svg';
import IconDeveloper from '../../assets/images/ic-developer.svg';
import IconContractor from '../../assets/images/ic-contractor.svg';
import IconBox from '../../assets/images/ic-solarbox.svg';
import AvatarPlaceholder from '../../assets/images/avatarplaceholder.png';
import GraphPlaceholder from '../../assets/images/graph-placeholder.png';
import ProgressBar from './ProgressBar';
import DetailContainer from './DetailContainer';
import './InvestorComponent.scss';

class InvestorComponent extends React.Component {

  state = {
    activeButton: 'day',
  };

  onButtonClick = (active) => {
    this.setState({
      activeButton: active
    })
  };

  render() {
    return (
      <div className="InvestorComponent">
        <div className="title-container -border">
          <div className="container">
            <h3 className="container-title">Summary</h3>
          </div>
        </div>
        <div className="profile-section">
          <div className="container">
            <div className="row">
              <div className="user-card-wrapper col-12 col-md-6 col-lg-3">
                <div className="user-card">
                  <div className="user-card-header">
                    <img src={IconBenef} alt="beneficiary"/>
                    <h4>YOUR PROFILE</h4>
                  </div>
                  <div className="user-card-content">
                    <div>
                      <h4>
                        Martin Wainstein
                      </h4>
                      <p>BENEFICIARY NAME</p>
                    </div>
                    <div>
                      <h4>2</h4>
                      <p>
                        ACTIVE PROJECTS
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="user-card-wrapper col-12 col-md-6 col-lg-3">
                <div className="user-card">
                  <div className="user-card-header">
                    <img src={IconSolar} alt="beneficiary"/>
                    <h4>YOUR ENERGY</h4>
                  </div>
                  <div className="user-card-content">
                    <div>
                      <h4>
                        845 kWh
                      </h4>
                      <p>TOTAL IN CURRENT PERIOD</p>
                    </div>
                    <div>
                      <h4>10,150 MWh</h4>
                      <p>
                        ALL TIME
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="user-card-wrapper col-12 col-md-6 col-lg-3">
                <div className="user-card">
                  <div className="user-card-header">
                    <img src={IconWallet} alt="beneficiary"/>
                    <h4>YOUR WALLET</h4>
                  </div>
                  <div className="user-card-content">
                    <div>
                      <h4>
                        $604.25
                      </h4>
                      <p>PROJECT WALLET BALANCE</p>
                    </div>
                    <div>
                      <h4>34 days</h4>
                      <p>
                        AUTO RE-LOAD
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="user-card-wrapper col-12 col-md-6 col-lg-3">
                <div className="user-card">
                  <div className="user-card-header">
                    <img src={IconFlag} alt="beneficiary"/>
                    <h4>NOTIFICATIONS & ACTIONS</h4>
                  </div>
                  <div className="user-card-content">
                    <div>
                      <h4>
                        None
                      </h4>
                      <p>NOTIFICATION</p>
                    </div>
                    <div>
                      <h4>Confirm Auto-Pay</h4>
                      <p>
                        ACTIONS REQUIRED
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                <h5>SOLAR ONLY</h5>
                <h3 className="title-primary">Pasto Public School - POC 1kW</h3>
                <h6><img src={IconGps} alt="icon-gps"/> Aibonito, Puerto Rico, USA</h6>
                <div className="flexbox">
                  <p>MUNI BOND</p>
                  <button>
                    Security issuer >
                  </button>
                </div>
                <p>
                  Project description in no more than two wrapping lines, giving the main impact highlight.
                </p>
                <ul>
                  <li>Highlight bullet sentence.</li>
                  <li>Highlight bullet sentence.</li>
                  <li>Highlight bullet sentence.</li>
                </ul>
                <h4 className="owner">PROJECT OWNER</h4>
                <div className="flexbox -alt">
                  <img src={AvatarPlaceholder} alt="placeholder"/>
                  <h4>Developer Name</h4>
                </div>
                <div className="progress-bar-container">
                  <div className="flexbox -no-spacing">
                    <p className="progress-donated">$ 2356.23</p>
                    <p className="progress-total">$ U$S 50'000.00</p>
                  </div>
                  <ProgressBar percentage={70}/>
                </div>
                <div className="stats">
                  <div className="stat-container">
                    <h6>% 5</h6>
                    <p>
                      RETURN
                    </p>
                  </div>
                  <div className="stat-container">
                    <h6>30%</h6>
                    <p>
                      TAX BENEFIT
                    </p>
                  </div>
                  <div className="stat-container">
                    <h6>2028</h6>
                    <p>
                      MATURITY
                    </p>
                  </div>
                  <div className="stat-container">
                    <h6>Aug 2019</h6>
                    <p>
                      INVEST BY
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="details-container">
          <h3 className="title-primary">YOUR PROJECT DETAILS</h3>
          <h4 className="sub-title">PASTO PUBLIC SCHOOL - POC 1KW</h4>
          <div className="container">
            <h4 className="section-title">Beneficiary Type</h4>
            <DetailContainer icon={IconBenef} title={'You are an Offtaker'} type={'0.24 ct/kWh'}
                             action={'Variable, anchored to your region'}/>
            <DetailContainer icon={IconBenef} title={'You are the Property Owner'} type={'Land & Building'}
                             action={'SU Pasto, Aibonito'}/>
            <button className="see-more">SEE ALL PARTIES INVOLVED ></button>
            <h4 className="section-title">Project Stage & Actions</h4>
            <DetailContainer icon={IconDeveloper} title={'Stage 7: Legacy'} type={'Connected'}
                             action={'You have no development action'}/>
            <DetailContainer icon={IconTools} title={'Contractor Actions'} type={'O&M'} action={'No actions logged'}/>
            <button className="see-more">SEE PROJECT DEVELOPMENT TIMELINE ></button>
            <h4 className="section-title">Project Wallets</h4>
            <DetailContainer icon={IconWallet} title={'Project Funds Wallet (***6HETY2)'} type={'$604.25'}
                             action={'Re-Loads from main account'}/>
            <DetailContainer icon={IconContractor} title={'Carbon & Climate Certificates (***8CERT4)'} type={"1250"}
                             action={'Swytch.io erc721'}/>
            <button className="see-more">GO TO PROFILE AND WALLET SETUP ></button>
            <h4 className="section-title">Bills & Rewards</h4>
            <DetailContainer icon={IconCalendar} title={'Your upcoming bill'} type={'+/- $203.2'}
                             action={'Close Date: April 30'}/>
            <DetailContainer icon={IconCerf} title={'Your system ownership'} type={"% 35"}
                             action={'Estimated full acquisition: 2021'}/>
            <button className="see-more">SEE PAYMENT HISTORY & OWNERSHIP RECORDS ></button>
            <h4 className="section-title">System & Device Details</h4>
            <DetailContainer icon={IconSolar} title={'Jingko / Schneider'} type={'1 kW | 1.25 DC/AC'}
                             action={'serial: 6udhui378djdh738j39d9'}/>
            <DetailContainer icon={IconBox} title={'Your IoT Witness Sensor'} type={"OSIP | 7 rating"}
                             action={'No anomalies detected'}/>
            <button className="see-more">SEE ALL ASSOCIATED DEVICES & ORACLES ></button>
            <h4 className="section-title">System Output</h4>
            <DetailContainer icon={IconBenef} title={'Current Output'} type={"650 W"}
                             action={'11:23 am Friday April 12, 2019'}/>
            <div className="SolarGraph">
              <img src={IconSolarAlt} alt="solar"/>
              <img src={GraphPlaceholder} alt="solar"/>
              <div className="switch-buttons">
                <button className={this.state.activeButton === 'day' ? "-active" : ''} onClick={() => this.onButtonClick('day')}>DAY</button>
                <button className={this.state.activeButton === 'month' ? "-active" : ''} onClick={() => this.onButtonClick('month')}>MONTH</button>
                <button className={this.state.activeButton === 'year' ? "-active" : ''} onClick={() => this.onButtonClick('year')}>YEAR</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InvestorComponent;
