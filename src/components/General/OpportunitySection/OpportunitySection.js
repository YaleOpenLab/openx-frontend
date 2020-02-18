import React from "react";
import "../../General/CustomSections/CustomSections.scss"

const OpportunitySection = props => {
  let items = null;
  var image1Style = {
	backgroundImage: 'url(' + props.items["images"][0] + ')',
	height: '319px',
	display: 'block',
  }
  var image2Style = {
	backgroundImage: 'url(' + props.items["images"][1] + ')',
	height: '319px',
	display: 'block',
  }
  var image3Style = {
	backgroundImage: 'url(' + props.items["images"][2] + ')',
	height: '319px',
	display: 'block',
  }
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
			<div class="col-md-4 CustomSection">
			    <div className="-image" style={image1Style} />
			</div>
			<div class="col-md-4 CustomSection">
			    <div className="-image" style={image2Style} />
			</div>
			<div class="col-md-4 CustomSection">
			    <div className="-image" style={image3Style} />
			</div>
		</div>
	  );
  }

  return (
    {items}
  );
};

export default OpportunitySection;
