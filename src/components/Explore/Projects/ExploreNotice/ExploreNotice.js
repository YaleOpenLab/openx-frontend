import React from "react";
import "./ExploreNotice.scss";

const ExploreNotice = props => {
  const handleDontShow = () => {
    localStorage.setItem("explore-notice", true);
    props.handleNotice();
  };

  return (
    <div className="explore-notice">
      <div className="container">
        <div className="explore-notice-title">Active Investable Projects</div>
        <div className="explore-notice-text">
          <p>
            If you are an investor, you can explore projects that are eligible
            to invest, with different risks and rewards depending on what stage
            that project is in. Projects in stage 1 have high risk and may
            eventually not be developed, but require angel support. Projects in
            stage 4 have gone through due diligence and have defined budgets and
            contracts in place.
          </p>
          <p>
            If you are a developer, or solar service provider, explore projects
            that are currently open for tender.
          </p>
        </div>
        <div className="explore-notice-action" onClick={handleDontShow}>
          <div className="explore-notice-icon" />
          Don’t show this message again
        </div>
      </div>
    </div>
  );
};

export default ExploreNotice;
