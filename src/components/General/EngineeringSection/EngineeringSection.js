import React from "react";
import "../../General/CustomSections/CustomSections.scss";

const EngineeringSection = props => {
  let items = null;
  var image1 = {
    backgroundImage: "url(" + props.items["image"] + ")",
    height: "401px"
  };
  var image2 = {
    backgroundImage:
      "url(" + props.items["highlighted product"]["images"][0] + ")",
    height: "72px"
  };
  var image3 = {
    backgroundImage:
      "url(" + props.items["highlighted product"]["images"][1] + ")",
    height: "401px"
  };
  if (props.items) {
    return (
      <div class="row CustomSections">
        <div class="col-md-12 CustomSection">
          <h3>ENGINEERING / SOLAR LAYOUT</h3>
        </div>
        <div class="col-md-6 CustomSection">
          <h4>Installation Archetype</h4>
          <p class="">{props.items["installation archetype"]}</p>
          <h4>IT Infrastructure</h4>
          <p class="">{props.items["it infrastructure"]}</p>
        </div>
        <div class="col-md-6 CustomSection">
          <h4>Engineering Layout</h4>
          <div class="-image" style={image1}></div>
        </div>
        <div class="col-md-6 CustomSection">
          <h4>Highlighted Product</h4>
          <div class="-image" style={image2}></div>
          <p class="">{props.items["highlighted product"]["description"]}</p>
        </div>
        <div class="col-md-6 CustomSection">
          <div class="-image" style={image3}></div>
        </div>
      </div>
    );
  }

  return { items };
};

export default EngineeringSection;
