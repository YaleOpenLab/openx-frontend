import React from "react";
import "./TermsTable.scss";

const TermsTable = props => {
  let items = null;

  if (props.data) {
    items = props.data.map(item => {
      return (
        <tr key={item.Value}>
          <td>
            <div className="text-with-icon">{item.Variable}</div>
            <div className="info-icon info-icon-img" />
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
