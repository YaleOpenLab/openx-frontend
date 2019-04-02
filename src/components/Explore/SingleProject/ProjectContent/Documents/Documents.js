import React from "react";
import { NavLink } from "react-router-dom";
import ScrollableAnchor from "react-scrollable-anchor";
import Title from '../../../../General/Title/Title';

const documents = [
  {icon: 1, name: 'Project Portfolio', description: 'Project Overview', url: '#'},
  {icon: 2, name: 'Contract', description: 'PPA', url: '#'},
  {icon: 2, name: 'Recs', description: 'RE Certification Agreement', url: '#'},
  {icon: 1, name: 'Investor Protections', description: 'Guarantor Agreements', url: '#'},
  {icon: 1, name: 'Developer', description: 'Contractors Agreement', url: '#'},
  {icon: 2, name: 'Stakeholders', description: 'Stakeholder Agreement', url: '#'},
  {icon: 2, name: 'Receiver', description: 'Community Energy Charter', url: '#'},
  {icon: 1, name: 'Project Financials', description: 'Financial Reportings', url: '#'}
];

const Documents = props => (
  <ScrollableAnchor id={"documents"}>
    <section className="Documents">
      <Title title="Documents & Contracts" className="-no-border" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-11">
            <p className="mb-5">Below are the links to the contracts associated to the project. Paper based legal contract, agreements and presentation are stored in a decentralised database, and their digital fingerprint (or hash) are stored in the blockchain ledger of the project to ensure immutability. Click on the icons below to access the documents. Some contract documents are self executed by blockchain-based smart contracts that you can access below. </p>
            <h4>Legal Contractual Documentation</h4>
            <div className="row -documentation">
              { documents && documents.map(document => (
                <div className="col">
                  { document.icon === 1 ? (
                    <span className="icon-doc-archive" />
                  ) : (
                    <span className="icon-doc-file" />
                  )}
                  <h6>{ document.description}</h6>
                  <p>{ document.name}</p>
                </div>
              ))}
            </div>
            <h4 className="mb-4">Blockchain-based Smart Contracts</h4>
          </div>
          <div className="col-12 -smart-contracts-container">
            <div className="row justify-content-center">
              <div className="col-11">
                <div className="row -smart-contracts">
                  <div className="col">
                    <button>Review Smart Contracts</button>
                  </div>
                  { documents && documents.slice(1).map(document => (
                    <div className="col">
                      <div className="icon-check-box">
                        <div className="">
                          <span className="icon-doc-checked" />
                        </div>
                        <p><NavLink to={"#"}>Link ></NavLink></p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-11">
            <h5>How to review blockchain-based smart contracts</h5>
            <p>
              The current smart contracts are written in the Go scripting language. Function names relate to specific terms or schemes of the contract, and often structured as ‘if, then’ statements. Contract descriptions in plain english are provided in grey letter prior to each function.<br/><br/>
              To perform a careful revision of smart contracts, you need a certified smart contract auditor. This project’s have been audited and approved by all parties.
            </p>
          </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default Documents;
