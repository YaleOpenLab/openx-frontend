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
import IconArchive from '../../assets/images/ic-doc-archive.svg';
import IconSingle from '../../assets/images/ic-single.svg';
import IconChecked from '../../assets/images/ic-doc-checked.svg';
import IconUnChecked from '../../assets/images/ic-doc-unchecked.svg';
import AvatarPlaceholder from '../../assets/images/avatarplaceholder.png';
import GraphPlaceholder from '../../assets/images/graph-placeholder.png';
import ProgressBar from './ProgressBar';
import DetailContainer from './DetailContainer';
import './InvestorComponent.scss';
import DocumentationContainer from './DocumentationContainer';
import UserCard from './UserCard';
import LinkContainer from './LinkContainer';
import { mockData } from './mockData';

class InvestorComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeButton: 'day',
    };
  }

  onButtonClick = (active) => {
    this.setState({
      activeButton: active
    })
  };

  render() {
    const investor = mockData.investorData;
    const investorProject = mockData.project;
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
              <UserCard icon={IconBenef} header={"YOUR PROFILE"} title={investor.fullName} titleLabel={'BENEFICIARY NAME'} value={investor.projectsActive} valueLabel={"ACTIVE PROJECTS"}/>
              <UserCard className={"-solar"} icon={IconSolar} header={"YOUR ENERGY"} title={investor.currentEnergy} titleLabel={'TOTAL IN CURRENT PERIOD'} value={investor.allTimeEnergy} valueLabel={"ALL TIME"}/>
              <UserCard icon={IconWallet} header={"YOUR WALLET"} title={investor.wallet} titleLabel={'PROJECT WALLET BALANCE'} value={investor.autoReload} valueLabel={"AUTO RE-LOAD"}/>
              <UserCard icon={IconFlag} header={"NOTIFICATIONS & ACTIONS"} title={investor.notification} titleLabel={'NOTIFICATION'} value={investor.actionsReq} valueLabel={"ACTIONS REQUIRED"}/>
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
                <h5>{investorProject.type}</h5>
                <h3 className="title-primary">{investorProject.title}</h3>
                <h6><img src={IconGps} alt="icon-gps"/>{investorProject.loc}</h6>
                <div className="flexbox">
                  <p>{investorProject.category}</p>
                  <button>
                    Security issuer >
                  </button>
                </div>
                <p>
                  {investorProject.description}
                </p>
                <ul>
                  <li>Highlight bullet sentence.</li>
                  <li>Highlight bullet sentence.</li>
                  <li>Highlight bullet sentence.</li>
                </ul>
                <h4 className="owner">PROJECT OWNER</h4>
                <div className="flexbox -alt">
                  <img src={AvatarPlaceholder} alt="placeholder"/>
                  <h4>{investorProject.ownerName}</h4>
                </div>
                <div className="progress-bar-container">
                  <div className="flexbox -no-spacing">
                    <p className="progress-donated">$ {investorProject.donated}</p>
                    <p className="progress-total">U$S {investorProject.total}</p>
                  </div>
                  <ProgressBar percentage={70}/>
                </div>
                <div className="stats">
                  <div className="stat-container">
                    <h6>% {investorProject.return}</h6>
                    <p>
                      RETURN
                    </p>
                  </div>
                  <div className="stat-container">
                    <h6>{investorProject.benefit}%</h6>
                    <p>
                      TAX BENEFIT
                    </p>
                  </div>
                  <div className="stat-container">
                    <h6>{investorProject.maturity}</h6>
                    <p>
                      MATURITY
                    </p>
                  </div>
                  <div className="stat-container">
                    <h6>{investorProject.investBy}</h6>
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
          <h4 className="sub-title">{investorProject.title}</h4>
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
              <div className="graph-wrapper">
                <img src={GraphPlaceholder} alt="solar"/>
              </div>
              <div className="switch-buttons">
                <button className={this.state.activeButton === 'day' ? "-active" : ''} onClick={() => this.onButtonClick('day')}>DAY</button>
                <button className={this.state.activeButton === 'month' ? "-active" : ''} onClick={() => this.onButtonClick('month')}>MONTH</button>
                <button className={this.state.activeButton === 'year' ? "-active" : ''} onClick={() => this.onButtonClick('year')}>YEAR</button>
              </div>
            </div>
            <button className="see-more">DOWNLOAD DATASET ></button>
          </div>
        </div>
        <div className="contracts-container">
          <h3 className="title-primary">YOUR PROJECT’s SMART SOLAR CONTRACTS</h3>
          <h4 className="sub-title">PASTO PUBLIC SCHOOL - POC 1KW</h4>
          <div className="container">
            <h5>LEGAL CONTRACTUAL DOCUMENTATION</h5>
            <div className="contracts">
              <DocumentationContainer title={'Project Overview'} sub={'PROJECT PORTFOLIO'} icon={IconArchive}/>
              <DocumentationContainer title={'PPA'} sub={'CONTRACT'} icon={IconSingle}/>
              <DocumentationContainer title={'RE Certification Agreement'} sub={'RECs'} icon={IconSingle}/>
              <DocumentationContainer title={'Guarantor Agreements'} sub={'INVESTOR PROTECTIONS'} icon={IconArchive}/>
              <DocumentationContainer title={'Contractors Agreement'} sub={'DEVELOPER'} icon={IconArchive}/>
              <DocumentationContainer title={'Stakeholder Agreement'} sub={'STAKEHOLDERS'} icon={IconSingle}/>
              <DocumentationContainer title={'Community Energy Charter'} sub={'INVESTOR PROTECTIONS'} icon={IconSingle}/>
              <DocumentationContainer title={'Financial Reportings'} sub={'PROJECT FINANCIALS'} icon={IconArchive}/>
            </div>
            <h5>BLOCKCHAIN-BASED SMART CONTRACTS</h5>
            <div className="contract-review">
              <div className="review-box">
                <p>
                  REVIEW
                  SMART
                  CONTRACTS
                </p>
                </div>
              <div className="flexbox">
                <LinkContainer icon={IconChecked} value={"Link >"}/>
                <LinkContainer icon={IconChecked} value={"Link >"}/>
                <LinkContainer icon={IconChecked} value={"Link >"}/>
                <LinkContainer icon={IconChecked} value={"Link >"}/>
                <LinkContainer icon={IconUnChecked} value={"Developer >"}/>
                <LinkContainer icon={IconUnChecked} value={"Developer >"}/>
                <LinkContainer icon={IconUnChecked} value={"Developer >"}/>
              </div>
            </div>
            <h6>HOW TO REVIEW BLOCKCHAIN-BASED SMART CONTRACT</h6>
            <p className="-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Cras dapibus vulputate diam eu pretium. Mauris elit orci,
              ultricies id fermentum vel, porta et eros. Vestibulum condimentum lectus in convallis feugiat.
              Sed vulputate fringilla felis. Aliquam ut arcu et dui feugiat scelerisque eu quis diam.
              Mauris placerat congue dui sit amet blandit. Phasellus condimentum libero vel velit auctor, sit amet tincidunt velit varius.
            </p>
            <button className="display-button">SHOW LESS</button>
          </div>
        </div>
      </div>
    );
  }
}

export default InvestorComponent;
