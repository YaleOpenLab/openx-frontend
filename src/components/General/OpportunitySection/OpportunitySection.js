import React from "react";
import "../../General/CustomSections/CustomSections.scss"

const OpportunitySection = props => {
  let items = null;
  if (props.items) {
	  return (
		<div className="row CustomSections">
			<div className="col-md-12 CustomSection">
				<h3>Opportunity</h3>
			</div>
			<div className="col-md-8 CustomSection">
				<h4>Description</h4>
				<p className="">{props.items["description"]}</p>
			</div>
			<div className="col-md-4 CustomSection">
				<h4>Pilot Goals</h4>
				<p className="">{props.items["pilot goals"][0]}</p>
				<p className="">{props.items["pilot goals"][1]}</p>
				<p className="">{props.items["pilot goals"][2]}</p>
				<p className="">{props.items["pilot goals"][3]}</p>
				<p className="">{props.items["pilot goals"][4]}</p>
			</div>
		</div>
	  );
  }

  return (
    {items}
  );
};

export default OpportunitySection;
