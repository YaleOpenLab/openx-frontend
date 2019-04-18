import React from 'react';
import './DocumentationContainer.scss';
import { NavLink } from 'react-router-dom';

const tmpDocuments = [
  {icon: 1, name: 'Project Portfolio', description: 'Project Overview', url: '#'},
  {icon: 2, name: 'Contract', description: 'PPA', url: '#'},
  {icon: 2, name: 'Recs', description: 'RE Certification Agreement', url: '#'},
  {icon: 1, name: 'Investor Protections', description: 'Guarantor Agreements', url: '#'},
  {icon: 1, name: 'Developer', description: 'Contractors Agreement', url: '#'},
  {icon: 2, name: 'Stakeholders', description: 'Stakeholder Agreement', url: '#'},
  // {icon: 2, name: 'Receiver', description: 'Community Energy Charter', url: '#'},
  // {icon: 1, name: 'Project Financials', description: 'Financial Reportings', url: '#'}
];

const DocumentationContainer = ({documents}) => {
  return (
    <div className="DocumentationContainer">
      <div className="row justify-content-center">
        <div className="col-11">
          <h4>Legal Contractual Documentation</h4>
          <div className="row -documentation">
            {tmpDocuments && tmpDocuments.map(document => (
              <div className="col" key={'document-' + document.name}>
                {document.icon === 1 ? (
                  <span className="icon-doc-archive"/>
                ) : (
                  <span className="icon-doc-file"/>
                )}
                <h6>{document.description}</h6>
                <p>{document.name}</p>
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
                {tmpDocuments && tmpDocuments.slice(1).map(document => (
                  <div className="col" key={'contract-' + document.name}>
                    <div className="icon-check-box">
                      <div className="">
                        <span className="icon-doc-checked"/>
                      </div>
                      <p><NavLink to={'#'}>Link ></NavLink></p>
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
            The smart contracts for this project are written in Go. Function names relate to specific
            terms or schemes of the contract, and are often structured as conditional statements. Descriptions and
            comments in plain english are provided alongside the function in grey letters.<br/><br/>
            To perform a careful revision of smart contracts, you would need the help of an experienced smart contract auditor.
            This project’s have been audited and approved by all parties.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DocumentationContainer;
