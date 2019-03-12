import React from "react";

const Terms = props => {
  return (
    <div id="terms" className="Terms">
      <div className="container">
        <div className="row">
          <div className="col-12 title no-padding border-bottom">Terms</div>
          <div className="col-12 text-description">
            <div className="sub-title">Purpose</div>
            <div className="sub-text">
              Proceeds from this project's raise are invested in the development
              of a Proof-of-Concept installation in the Segunda Unidad Pasto
              School in Aibonito, Puerto Rico. The PoC is part of research
              initiative of the Yale OpenLab and the Digital Currency Initiative
              of the MIT Media Lab.
            </div>
          </div>
          <div className="col-12 project-table no-padding">
            <div className="table-responsive">
              <table className="table">
                <thead className="thead-white">
                  <tr>
                    <th scope="col">variable</th>
                    <th scope="col">value</th>
                    <th scope="col">relevant party</th>
                    <th scope="col">note</th>
                    <th scope="col">status</th>
                    <th scope="col">support doc</th>
                  </tr>
                </thead>
                <tbody className="tbody-white">
                  <tr>
                    <td>Security Type</td>
                    <td>Municipal Bond</td>
                    <td>PR DofEd</td>
                    <td>Promoted by PR governor's office</td>
                    <td>
                      <span>demo</span>
                    </td>
                    <td>
                      <span>doc-icon</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Security Type</td>
                    <td>Municipal Bond</td>
                    <td>PR DofEd</td>
                    <td>Promoted by PR governor's office</td>
                    <td>
                      <span>demo</span>
                    </td>
                    <td>
                      <span>doc-icon</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 security-note">
            <div className="security-title">
                security note
            </div>
            <div className="security-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id
              fermentum vel, porta et eros. Vestibulum condimentum lectus in
              convallis feugiat. Sed vulputate fringilla felis. Link >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
