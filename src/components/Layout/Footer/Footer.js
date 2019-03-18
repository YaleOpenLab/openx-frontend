import React from "react";
import "./Footer.scss";
import Logo from "../../UI/Logo/Logo";

const footer = props => (
  <div>
    <div className="Footer">
      <div className="logo-container">
        <Logo projectName="solar" />
      </div>
      <div className="Sources">
        <div className="footer-text-div">open source licenses & links</div>
        <div className="footer-project-logo-div">
          <div className="footer-project-logo">
            <Logo projectName="s" type="white" />
          </div>
          <div className="footer-border-left"></div>
          <div className="footer-project-logo">
            <Logo projectName="x" type="white" />
          </div>
          <div className="footer-border-left"></div>
          <div className="footer-project-logo">
            <Logo projectName="y" type="white" />
          </div>
          <div className="footer-border-left"></div>
          <div className="footer-project-logo">
            <Logo projectName="z" type="white" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default footer;
