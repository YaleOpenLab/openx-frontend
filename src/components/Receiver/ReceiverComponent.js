import React from "react";
import IconBenef from "../../assets/images/ic-beneficiary.svg";
import IconWallet from "../../assets/images/ic-wallet.svg";
import IconSolar from "../../assets/images/ic-solar-panel.svg";
import IconSolarAlt from "../../assets/images/ic-solar-alt.svg";
import Placeholder from "../../assets/images/solars.png";
import IconGps from "../../assets/images/ic-location-min.svg";
import iconWatch from "../../assets/images/ic-watch.svg";
import IconTools from "../../assets/images/ic-tools.svg";
import IconCerf from "../../assets/images/ic-certified.svg";
import IconCalendar from "../../assets/images/ic-calendar.svg";
import IconDeveloper from "../../assets/images/ic-developer.svg";
import IconContractor from "../../assets/images/ic-contractor.svg";
import IconBox from "../../assets/images/ic-solarbox.svg";
import IconArchive from "../../assets/images/ic-doc-archive.svg";
import IconSingle from "../../assets/images/ic-single.svg";
import IconChecked from "../../assets/images/ic-doc-checked.svg";
import IconUnChecked from "../../assets/images/ic-doc-unchecked.svg";
import AvatarPlaceholder from "../../assets/images/avatarplaceholder.png";
import GraphPlaceholder from "../../assets/images/graph-placeholder.png";
import ProgressBar from "./ProgressBar";
import DetailContainer from "./DetailContainer";
import "./ReceiverComponent.scss";
import DocumentationContainer from "../General/DocumentationContainer";
import ContractReview from "../General/ContractReview";
import { mockData } from "./mockData";
import SummaryCards from "../General/SummaryCards/SummaryCards";

class ReceiverComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: "day",
      dropdown: false,
      documentation: [
        {
          title: 'Project Overview',
          sub: 'PROJECT PORTFOLIO',
          icon: IconArchive,
        },
        {
          title: 'PPA',
          sub: 'CONTRACT',
          icon: IconSingle,
        },
        {
          title: 'RE Certification Agreement',
          sub: 'RECs',
          icon: IconSingle,
        },
        {
          title: 'Guarantor Agreements',
          sub: 'INVESTOR PROTECTIONS',
          icon: IconArchive,
        },
        {
          title: 'Contractors Agreement',
          sub: 'DEVELOPER',
          icon: IconArchive,
        },
        {
          title: 'Stakeholder Agreement',
          sub: 'STAKEHOLDERS',
          icon: IconSingle,
        },
        {
          title: 'Community Energy Charter',
          sub: 'INVESTOR PROTECTIONS',
          icon: IconSingle,
        },
        {
          title: 'Financial Reportings',
          sub: 'PROJECT FINANCIALS',
          icon: IconArchive,
        },
      ],
      review: [
        {
          icon: IconChecked,
          label: 'Link >',
        },
        {
          icon: IconChecked,
          label: 'Link >',
        },
        {
          icon: IconChecked,
          label: 'Link >',
        },
        {
          icon: IconChecked,
          label: 'Link >',
        },
        {
          icon: IconUnChecked,
          label: 'Developer >',
        },
        {
          icon: IconUnChecked,
          label: 'Developer >',
        },
        {
          icon: IconUnChecked,
          label: 'Developer >',
        },
      ]
    };
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
    const receiver = mockData.receiverData;
    const receiverProject = mockData.project;
    return (
      <div className="ReceiverComponent">
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
                    { value: receiver.fullName, desc: "beneficiary name" },
                    { value: receiver.projectsActive, desc: "active projects" }
                  ]}
                  icon="beneficiary-icon"
                />
              </div>
              <div className="col-sm-6 col-lg-3 ">
                <SummaryCards
                  title="your energy"
                  items={[
                    {
                      value: receiver.currentEnergy,
                      desc: "TOTAL IN CURRENT PERIOD"
                    },
                    { value: receiver.allTimeEnergy, desc: "ALL TIME" }
                  ]}
                  icon="solar-panel-icon"
                />
              </div>

              <div className="col-sm-6 col-lg-3 ">
                <SummaryCards
                  title="YOUR WALLET"
                  items={[
                    { value: receiver.wallet, desc: "PROJECT WALLET BALANCE" },
                    { value: receiver.autoReload, desc: "AUTO RE-LOAD" }
                  ]}
                  icon="wallet-icon"
                />
              </div>
              <div className="col-sm-6 col-lg-3 ">
                <SummaryCards
                  title="NOTIFICATIONS & ACTIONS"
                  items={[
                    { value: receiver.notification, desc: "NOTIFICATION" },
                    { value: receiver.actionsReq, desc: "ACTIONS REQUIRED" }
                  ]}
                  icon="flag-icon"
                />
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
                <img src={Placeholder} alt="placeholder" />
              </div>
              <div className="col-lg-5 media-left">
                <button className="watch-button">
                  <img src={iconWatch} alt="watch-icon" />
                </button>
                <h5>{receiverProject.type}</h5>
                <h3 className="title-primary">{receiverProject.title}</h3>
                <h6>
                  <img src={IconGps} alt="icon-gps" />
                  {receiverProject.loc}
                </h6>
                <div className="flexbox">
                  <p>{receiverProject.category}</p>
                  <button>Security issuer ></button>
                </div>
                <p>{receiverProject.description}</p>
                <ul>
                  <li>Highlight bullet sentence.</li>
                  <li>Highlight bullet sentence.</li>
                  <li>Highlight bullet sentence.</li>
                </ul>
                <h4 className="owner">PROJECT OWNER</h4>
                <div className="flexbox -alt">
                  <img src={AvatarPlaceholder} alt="placeholder" />
                  <h4>{receiverProject.ownerName}</h4>
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
                  <ProgressBar percentage={70} />
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
                  title={"You are an Offtaker"}
                  type={"0.24 ct/kWh"}
                  action={"Variable, anchored to your region"}
                />
                <DetailContainer
                  icon={IconBenef}
                  title={"You are the Property Owner"}
                  type={"Land & Building"}
                  action={"SU Pasto, Aibonito"}
                />
                <button className="see-more">SEE ALL PARTIES INVOLVED ></button>
                <h4 className="section-title">Project Stage & Actions</h4>
                <DetailContainer
                  icon={IconDeveloper}
                  title={"Stage 7: Legacy"}
                  type={"Connected"}
                  action={"You have no development action"}
                />
                <DetailContainer
                  icon={IconTools}
                  title={"Contractor Actions"}
                  type={"O&M"}
                  action={"No actions logged"}
                />
                <button className="see-more">
                  SEE PROJECT DEVELOPMENT TIMELINE >
                </button>
                <h4 className="section-title">Project Wallets</h4>
                <DetailContainer
                  icon={IconWallet}
                  title={"Project Funds Wallet (***6HETY2)"}
                  type={"$604.25"}
                  action={"Re-Loads from main account"}
                />
                <DetailContainer
                  icon={IconContractor}
                  title={"Carbon & Climate Certificates (***8CERT4)"}
                  type={"1250"}
                  action={"Swytch.io erc721"}
                />
                <button className="see-more">
                  GO TO PROFILE AND WALLET SETUP >
                </button>
                <h4 className="section-title">Bills & Rewards</h4>
                <DetailContainer
                  icon={IconCalendar}
                  title={"Your upcoming bill"}
                  type={"+/- $203.2"}
                  action={"Close Date: April 30"}
                />
                <DetailContainer
                  icon={IconCerf}
                  title={"Your system ownership"}
                  type={"% 35"}
                  action={"Estimated full acquisition: 2021"}
                />
                <button className="see-more">
                  SEE PAYMENT HISTORY & OWNERSHIP RECORDS >
                </button>
                <h4 className="section-title">System & Device Details</h4>
                <DetailContainer
                  icon={IconSolar}
                  title={"Jingko / Schneider"}
                  type={"1 kW | 1.25 DC/AC"}
                  action={"serial: 6udhui378djdh738j39d9"}
                />
                <DetailContainer
                  icon={IconBox}
                  title={"Your IoT Witness Sensor"}
                  type={"OSIP | 7 rating"}
                  action={"No anomalies detected"}
                />
                <button className="see-more">
                  SEE ALL ASSOCIATED DEVICES & ORACLES >
                </button>
                <h4 className="section-title">System Output</h4>
                <DetailContainer
                  icon={IconBenef}
                  title={"Current Output"}
                  type={"650 W"}
                  action={"11:23 am Friday April 12, 2019"}
                />
                <div className="SolarGraph">
                  <img src={IconSolarAlt} alt="solar" />
                  <div className="graph-wrapper">
                    <img src={GraphPlaceholder} alt="solar" />
                  </div>
                  <div className="switch-buttons">
                    <button
                      className={
                        this.state.activeButton === "day" ? "-active" : ""
                      }
                      onClick={() => this.onButtonClick("day")}
                    >
                      DAY
                    </button>
                    <button
                      className={
                        this.state.activeButton === "month" ? "-active" : ""
                      }
                      onClick={() => this.onButtonClick("month")}
                    >
                      MONTH
                    </button>
                    <button
                      className={
                        this.state.activeButton === "year" ? "-active" : ""
                      }
                      onClick={() => this.onButtonClick("year")}
                    >
                      YEAR
                    </button>
                  </div>
                </div>
                <button className="see-more">DOWNLOAD DATASET ></button>
              </div>
            </div>
            <div className="contracts-container">
              <h3 className="title-primary">
                YOUR PROJECT’s SMART SOLAR CONTRACTS
              </h3>
              <h4 className="sub-title">PASTO PUBLIC SCHOOL - POC 1KW</h4>
              <div className="container">
                <h5>LEGAL CONTRACTUAL DOCUMENTATION</h5>
                <DocumentationContainer data={this.state.documentation}/>
                <h5>BLOCKCHAIN-BASED SMART CONTRACTS</h5>
                    <ContractReview data={this.state.review} title={'REVIEW SMART CONTRACTS'}/>
                <h6>HOW TO REVIEW BLOCKCHAIN-BASED SMART CONTRACT</h6>
                <p className="-small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  dapibus vulputate diam eu pretium. Mauris elit orci, ultricies
                  id fermentum vel, porta et eros. Vestibulum condimentum lectus
                  in convallis feugiat. Sed vulputate fringilla felis. Aliquam
                  ut arcu et dui feugiat scelerisque eu quis diam. Mauris
                  placerat congue dui sit amet blandit. Phasellus condimentum
                  libero vel velit auctor, sit amet tincidunt velit varius.
                </p>
              </div>
            </div>
          </div>
        )}
        <button
          className="display-button"
          onClick={() => this.handleDropdown()}
        >
          {this.state.dropdown ? "SHOW LESS" : "SHOW MORE"}
        </button>
      </div>
    );
  }
}

export default ReceiverComponent;
