import React from "react";
import "./Footer.scss";
import Logo from "../../UI/Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import ImageLogo from "../../UI/ImageLogo/ImageLogo";

const footer = () => (
  <div>
    <div className="Footer">
      <div className="footer-content">
        <div className="container">
          <div className="logo-container">
            <ImageLogo />
          </div>
          <div className="footer-info">
            <div className="footer-info-title">
              This is a demo. Not a live platform.
            </div>
            <div className="footer-info-sub-title">Disclaimer</div>
            <div className="footer-info-text">
              You have accessed this password protected site to explore it as a
              work-in-process project. You cannot invest real money in projects,
              and those currently showcased are not live investable
              opportunities with issued securities. Some of the showcased
              projects are fictional for the purpose of this demo and, while
              intending to be realistic, any similarity with reality is purely
              coincidental. OpenSolar is not a registered broker dealer.
            </div>
            <div className="footer-info-sub-title">about</div>
            <div className="footer-info-text">
              The OpenSolar project is a collaborative effort between the
              Digital Currency Initiative at the MIT Media Lab and the Open
              Innovation Lab at the Tsai Center for Innovative Thinking at Yale.
              Other partners and collaborators are also involved in making this
              project possible. Open source code can be accessed via{" "}
              <a
                href="https://github.com/YaleOpenLab/openx"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              . OpenX is the underlying ‘platform of platforms’ framework that
              drives the OpenSolar instance and can be utilized for other
              peer-based financing platforms.
            </div>
          </div>
        </div>
      </div>
      <div className="footer-sources">
        <div className="footer-text-div">
          <FontAwesomeIcon icon={faCopyright} /> 2019, Yale Openlab & MIT Media
          Lab. All rights reserved
        </div>
        <div className="footer-project-logo-div">
          <div className="footer-project-logo">
            <Logo projectName="x" type="white" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default footer;
