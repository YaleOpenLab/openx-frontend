import React from "react";
import "./TermsTable.scss";
import SeeMore from "../../../../../UI/SeeMore/SeeMore";

const TermsTable = props => {
  let items = null;
  let columns = null;

  if (props.data) {
	   columns = props.data.columns.map(item => {
		  return (<th scope="col">{item}</th>);
	  });
  }

	if (props.data) {
		items = props.data.rows.map(item => {
			return (
				<tr key={item.index}>
					<td>
						<div className="text-with-icon"><SeeMore>{item[0]}</SeeMore></div>
					</td>
					<td>{item[1]}</td>
					<td>{item[2]}</td>
					<td>{item[3]}</td>
					<td>
						<div className="terms-table-status">{item[4]}</div>
					</td>
					<td>
						<span className="terms-doc-icon" />
					</td>
				</tr>
			);
		});
	}

  return (
    <div className="table-responsive">
      <table className="table terms-table">
        <thead className="thead-white" onClick={() => props.handleCollapse()}>
          <tr>{columns}</tr>
        </thead>
        <tbody className="tbody-white">{items}</tbody>
      </table>
    </div>
  );
};

export default TermsTable;
