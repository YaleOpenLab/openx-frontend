import React from "react";
import "../../General/CustomSections/CustomSections.scss"

const BizSection = props => {
  let items = null;
	var image1 = {
		backgroundImage: 'url(' + "https://i.ibb.co/8r5yz1h/Asset-10-4x-2x.png" + ')',
		height: '401px',
	}
	var image2 = {
		backgroundImage: 'url(' + "https://i.ibb.co/p1kqJxC/asdsads.png" + ')',
		height: '150px',
	}

  if (props.items) {
	  return (
		  <div class="row CustomSections">
			<div class="col-md-12 CustomSection">
				<h3>BUSINESS NUMBERS &amp; PAYMENT SCHEME</h3>
			</div>
			<div class="col-md-12 CustomSection">
				<p class="">{props.items["description"]}</p>
			</div>
			<div class="col-md-12 CustomSection">
				<h4>General Payment Logic</h4>
				<div class="-image"
					style={image1}>
				</div>
			</div>
			<div class="col-md-12 CustomSection">
				<h4>Capital Expenditure</h4>
				<p class="">{props.items["capital expenditure"]}</p>
			</div>
			<div class="col-md-12 CustomSection">
				<div class="-image"
					style={image2}></div>
			</div>
			<div class="col-md-12 CustomSection">
				<h4>Project Revenue</h4>
				<p class="">{props.items["project revenue"]}</p>
			</div>
			<div class="col-md-12 CustomSection">
				<h4>Project Expenses</h4>
				<p class="">{props.items["project expenses"]}</p>
			</div>
			<div class="col-md-12 CustomSection">
				<h4>Non-profit</h4>
				<p class="">{props.items["project revenue"]}</p>
			</div>
			<div class="col-md-12 CustomSection"><a href="#">{props.items["other links"]}
				&gt;</a></div>
		</div>
	  );
  }

  return (
    {items}
  );
};

export default BizSection;
