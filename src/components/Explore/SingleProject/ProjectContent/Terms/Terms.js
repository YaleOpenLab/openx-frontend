import React from "react";
import "./Terms.scss";
import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";
import TermsTable from "./TermsTable/TermsTable";

configureAnchors({
  offset: -90,
  scrollDuration: 200,
  keepLastAnchorHash: true
});

const Terms = props => (
  <ScrollableAnchor id={"terms"}>
    <section className="Terms">
      <div className="container">
        <div className="row">
          <div className="col-12 title no-padding border-bottom">Terms</div>
          <div className="col-12 text-description">
            <div className="sub-title">{props.tempData.title}</div>
            <div className="sub-desc">
              {props.tempData.description}
            </div>
          </div>
          <div className="col-12 project-table no-padding">
            <TermsTable
              data={props.data.Terms}
            />
          </div>
          <div className="col-12 security-note">
            <div className="security-title">security note</div>
            <div className="security-text">
              {props.tempData.securityNote}
              <span className="custom-link-to"> Link ></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default Terms;
