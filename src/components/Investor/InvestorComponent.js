import React, { Component } from "react";
import IconBenef from '../../assets/images/ic-beneficiary.svg';
import IconWallet from '../../assets/images/ic-wallet.svg';
import IconFlag from '../../assets/images/ic-flag.svg';
import IconSolar from '../../assets/images/ic-solar.svg';
import Placeholder from '../../assets/images/solars.png';
import './InvestorComponent.scss';
import IconGps from '../../assets/images/ic-location-min.svg';
import iconWatch from '../../assets/images/ic-watch.svg';
import AvatarPlaceholder from '../../assets/images/avatarplaceholder.png';

class InvestorComponent extends Component {
  render() {
    return (
      <div className="InvestorComponent">
        <div className="container title-container -border">
          <h3 className="container-title">Summary</h3>
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
        <div className="container title-container -border">
          <h3 className="container-title">Your Projects</h3>
        </div>
        <div className="projects-section">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-7 media-right">
                <img src={Placeholder} alt="placeholder"/>
              </div>
              <div className="col-5 media-left">
                <button className="watch-button">
                  <img src={iconWatch} alt="watch-icon"/>
                </button>
                <h5>SOLAR ONLY</h5>
                <h4>Pasto Public School - POC 1kW</h4>
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
                <h4 className="owner">PROJECT  OWNER</h4>
                <div className="flexbox -alt">
                  <img src={AvatarPlaceholder} alt="placeholder"/>
                  <h4>Developer Name</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InvestorComponent;
