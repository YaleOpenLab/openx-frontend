import React from "react";

const BusinessPaymentSection = props => (
  <div className="col-12 mg-top-15">
    <div className="row">
      <div className="col-12 sub-title">{props.title}</div>
      <div className="col-12 col-sm-8 sub-image">
        <img src={props.imageUrl} alt={props.title} />
      </div>
      <div className="col-12 col-sm-4 sub-text">
        {props.text}
      </div>
    </div>
  </div>
);

export default BusinessPaymentSection;
