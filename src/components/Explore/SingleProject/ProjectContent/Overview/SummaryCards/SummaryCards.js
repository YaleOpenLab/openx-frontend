import React from "react";

const SummaryCards = props => {
  let items = null;
  if (props.items) {
    items = props.items.map((item, i) => {
      return (
        <div
          className={`grid-body ${
            item.colSize ? `flex-content-${item.colSize}` : "flex-content-20"
          }`}
          key={i}
        >
          <div className="grid-body-content">{item.value}</div>
          <div className="grid-body-description">{item.desc}</div>
        </div>
      );
    });
  }

  return (
    <div className="col-sm-6 col-md-3">
      <div className="grid-title">
        <span className={props.icon} />
        {props.title}
      </div>
      {items}
    </div>
  );
};

export default SummaryCards;
