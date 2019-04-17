import React from "react";
import "./Footer.scss";
import Logo from "../../UI/Logo/Logo";

const footer = props => (
  <div>
    <div className="Footer">
      <div className="footer-content">
        <div className="container">
          <div className="logo-container">
            <Logo projectName="solar" />
          </div>
          <div className="footer-info">
            <div className="footer-info-title">
              This is a demo. Not a live platform.
            </div>
            <div className="footer-info-sub-title">Disclaimer</div>
            <div className="footer-info-text">
              You have accessed this password protected site to explore it as a
              work-in-process project. You cannot invest real money in projects, and the
              projects currently showcased are not live investable opportunities
              with issued securities. Some of the showcased projects are
              fictional for the purpose of this demo and, while intending to be
              realistic, any similarity with reality is coincidental. OpenSolar
              is not a registered broker dealer.
            </div>
            <div className="footer-info-sub-title">about</div>
            <div className="footer-info-text">
              The OpenSolar project is a collaborative effort between the
              Digital Currency Initiative at the MIT Media Lab and the Open
              Innovation Lab at the Tsai Center for Innovative Thinking at Yale.
              Other partners and collaborators are also involved in making this
              project possible. Open source code can be accessed via GitHub.
              OpenX is the underlying ‘platform of platforms’ framework that
              drives the OpenSolar instance and can be utilized for other
              peer-based financing platforms.
            </div>
          </div>
        </div>
      </div>
      <div className="footer-sources">
        <div className="footer-text-div">
          Copyright 2019. Yale Openlab & MIT Media Lab. All rights reserved
        </div>
        <div className="footer-project-logo-div">
          <div className="footer-project-logo">
            <Logo projectName="s" type="white" />
          </div>
          <div className="footer-border-left" />
          <div className="footer-project-logo">
            <Logo projectName="x" type="white" />
          </div>
          <div className="footer-border-left" />
          <div className="footer-project-logo">
            <Logo projectName="y" type="white" />
          </div>
          <div className="footer-border-left" />
          <div className="footer-project-logo">
            <Logo projectName="z" type="white" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default footer;
