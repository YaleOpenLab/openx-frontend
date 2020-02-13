import React from "react";
import "../SummaryCards/SummaryCards.scss";

const SummaryCards = props => {
  let items = null;
  if (props.items) {
    items = Object.keys(props.items).map((description, value) => {
      return (
        <div className="card-body" key={value}>
          <div className="card-body-content">{props.items[description]}</div>
          <div className="card-body-description">{description}</div>
        </div>
      );
    });
  }

  return (
    <div className={`summary-card ${props.theme ? props.theme : ""}`}>
      {!props.title ? null : (
        <div className="card-header">
          <div
            className={`card-header-icon ${props.icon} ${
              props.classes ? props.classes.join(" ") : ""
            }`}
            style={
              props.iconSize
                ? { height: props.iconSize, width: props.iconSize }
                : {}
            }
          />
          <div className="card-header-title">{props.title}</div>
        </div>
      )}
      {items}
    </div>
  );
};

export default SummaryCards;
