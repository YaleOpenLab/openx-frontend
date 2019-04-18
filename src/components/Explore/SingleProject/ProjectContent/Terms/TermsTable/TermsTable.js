import React from "react";
import "./TermsTable.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const TermsTable = props => {
  let items = null;

  if (props.data) {
    items = props.data.map(item => {
      return (
        <tr key={item.Value}>
          <td>
            <div className="text-with-icon">
              <a href="#" title={item.Variable === "Maturity"? "Maturity is the period by which your bonds mature":
                item.Variable === "Guarantee"? "Guarantee is the minimum amount that the investor gets in the event that the beneficiary defaults on its payments" :
                item.Variable === "Insurance"? "Insurance is the amount of the project's investment value or type of insurance insured by a given third party":
                item.Variable === "Security Type"? "The type of security that the given investment belongs to" :
                item.Variable === "PPA Tariff" || item.Variable === "PPA Avg. Tariff" ? "The tariff dicatated by the power purchase agreement agreed upon":
                item.Variable === "Return (TEY)" || item.Variable === "Return" || item.Variable === "Exp. Return" ? "The return associated with the project":
                item.Variable === "Ownership Flip"? "The approximate date when the ownership flip is slated to take place assuming constant payments" :
                "Default tooltip"
              }>
                {item.Variable} <FontAwesomeIcon icon={faInfoCircle} size="xs"/>
            </a>
            </div>
          </td>
          <td>{item.Value}</td>
          <td>{item.RelevantParty}</td>
          <td>{item.Note}</td>
          <td>
            <div className="terms-table-status">{item.Status}</div>
          </td>
          <td>
            <a href={item.SupportDoc} rel="noopener noreferrer" target="_blank"><span className="terms-doc-icon" /></a>
          </td>
        </tr>
      );
    });
  }

  return (
    <div className="table-responsive">
      <table className="table terms-table">
        <thead className="thead-white" onClick={() => props.handleCollapse()}>
          <tr>
            <th scope="col">variable</th>
            <th scope="col">value</th>
            <th scope="col">relevant party</th>
            <th scope="col">note</th>
            <th scope="col">status</th>
            <th scope="col">support doc</th>
          </tr>
        </thead>
        <tbody className="tbody-white">{items}</tbody>
      </table>
    </div>
  );
};

export default TermsTable;
