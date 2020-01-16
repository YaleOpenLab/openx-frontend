import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import Title from '../../../../General/Title/Title';
import DocumentationContainer from '../../../../General/DocumentationContainer/DocumentationContainer';

const Documents = props => (
  <ScrollableAnchor id={"documents"}>
    <section className="Documents">
      <Title title="Documents & Contracts" className="-no-border" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-11">
            <p className="mb-5">
							Below are the links to the contracts associated to the project. Paper based legal contract, agreements and presentation are stored in a decentralised database, and
							their digital fingerprint (or hash) are stored in the blockchain ledger of the project to ensure immutability. Click on the icons below to access the documents. Some
							contract documents are self executed by blockchain-based smart contracts that you can access below.
            </p>
          </div>
        </div>
        {/*todo: integrate*/}
        <DocumentationContainer documents={[]}/>
      </div>
    </section>
  </ScrollableAnchor>
);

export default Documents;
