import React from 'react';
import './Terms.scss';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import TermsTable from './TermsTable/TermsTable';

configureAnchors({
  offset: -90,
  scrollDuration: 200,
  keepLastAnchorHash: true
});

const Terms = props => (
  <ScrollableAnchor id={'terms'}>
    <section className="Terms">
      <div className="container">
        <div className="row">
          <div className="col-12 title no-padding border-bottom">Terms</div>
          <div className="col-12 text-description">
            <div className="sub-title">
              Purpose
            </div>
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
              These terms are for demonstration purpose only. The current project does not correspond to an actual issued security and offered by a registered broker dealer. If it was, this note would provide legal disclaimers and notes about the security asset.
              <a href="/"> Learn more ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default Terms;
