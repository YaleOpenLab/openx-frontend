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
            <p className="mb-5">Below are links to contracts associated with the project. Paper based legal contracts, agreements and presentation are stored digitally in a decentralised database and their digital fingerprints (hashes) are stored on the blockchain to ensure immutability. Some contract documents are self generated and executed by blockchain-based smart contracts. Click on the icons below to access the documents.</p>
          </div>
        </div>
        {/*todo: integrate*/}
        <DocumentationContainer documents={[]}/>
      </div>
    </section>
  </ScrollableAnchor>
);

export default Documents;
