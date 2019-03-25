import React from "react";

const SummaryCardsD = props => (
  <div className="col-sm-6 col-md-3">
    <div className="grid-title">
      <span className={props.icon} />
      {props.title}
    </div>
    <div className="grid-body  flex-content-20">
      <div className="grid-body-content">{props.itemValue1}</div>
      <div className="grid-body-description">{props.itemName1}</div>
    </div>
    <div className="grid-body  flex-content-20">
      <div className="grid-body-content">{props.itemValue2}</div>
      <div className="grid-body-description">{props.itemName2}</div>
    </div>
    <div className="grid-body  flex-content-20">
      <div className="grid-body-content">{props.itemValue3}</div>
      <div className="grid-body-description">{props.itemName3}</div>
    </div>
    <div className="grid-body  flex-content-20">
      <div className="grid-body-content">{props.itemValue4}</div>
      <div className="grid-body-description">{props.itemName4}</div>
    </div>
  </div>
);

export default SummaryCardsD;
