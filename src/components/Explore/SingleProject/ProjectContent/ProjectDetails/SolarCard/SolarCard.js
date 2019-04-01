import React from "react";

const SolarCard = props => {
  let items = null;
  if (props.items) {
    items = props.items.map((item, i) => {
      return (
        <div className="grid-body flex-content-25" key={i}>
          <div className="grid-body-content">{item.value}</div>
          <div className="grid-body-description">{item.desc}</div>
        </div>
      );
    });
  }

  return <React.Fragment>{items}</React.Fragment>;
};

export default SolarCard;
