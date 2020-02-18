import React from "react";
import "../../General/CustomSections/CustomSections.scss"

const ArchitectureSection = props => {
  let items = null;
  var image1Style = {
	backgroundImage: 'url(' + props.items["map layout image"] + ')',
	height: '437px',
  }

  var image2Style = {
	backgroundImage: 'url(' + props.items["solar output image"] + ')',
    height: '437px',
  }

  if (props.items) {
	  return (
		  <div className="architecture">
			<div className="row CustomSections">
				<div className="col-md-12 CustomSection">
					<h3>ARCHITECTURE / Project Design</h3>
				</div>
				<div className="col-md-6 CustomSection">
					<h4>Map Layout</h4>
					<div className="-image" style={image1Style}>
					</div>
				</div>
				<div className="col-md-3 CustomSection">
					<h4>Solar Output</h4>
					<div className="-image" style={image2Style}>
					</div>
				</div>
				<div className="col-md-3 CustomSection">
					<h4>Design Description</h4>
					<p className="">{props.items["design description"]}</p>
				</div>
				<div className="col-md-12 CustomSection">
					<p className="">{props.items["description"]}</p>
				</div>
			</div>
			</div>
	  );
  }

  return (
    {items}
  );
};

export default ArchitectureSection;
