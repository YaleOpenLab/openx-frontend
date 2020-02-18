import React from "react";
import "../../General/CustomSections/CustomSections.scss"

const CommunitySection = props => {
  let items = null;
	var image1 = {
		backgroundImage: 'url(' + props.items["consultation"][0] + ')',
		height: '162px',
	}
	var image2 = {
		backgroundImage: 'url(' + props.items["participation"][0] + ')',
		height: '162px',
	}
	var image3 = {
		backgroundImage: 'url(' + props.items["outreach"][0] + ')',
		height: '162px',
	}
	var image4 = {
		backgroundImage: 'url(' + props.items["governance"][0] + ')',
		height: '162px',
	}
  if (props.items) {
	  return (
		<div class="row CustomSections">
			<div class="col-md-12 CustomSection">
				<h3>Community Engagement</h3>
			</div>
			<div class="col-md-3 CustomSection">
				<h4>Consultation</h4>
				<div class="-image"
					style={image1}></div>
				<p class="">{props.items["consultation"][1]}</p>
			</div>
			<div class="col-md-3 CustomSection">
				<h4>Participation</h4>
				<div class="-image"
					style={image2}></div>
				<p class="">{props.items["participation"][1]}</p>
			</div>
			<div class="col-md-3 CustomSection">
				<h4>Outreach</h4>
				<div class="-image"
					style={image3}>
				</div>
				<p class="">{props.items["outreach"][1]}</p>
			</div>
			<div class="col-md-3 CustomSection">
				<h4>Governance</h4>
				<div class="-image"
					style={image4}>
				</div>
				<p class="">{props.items["governance"][1]}</p>
			</div>
		<div class="col-md-8 CustomSection"><a href="#">Link to community impact report &gt;</a></div>
		</div>
	  );
  }

  return (
    {items}
  );
};

export default CommunitySection;
