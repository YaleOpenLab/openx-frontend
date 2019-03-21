import React from "react";
import "./DescriptionGrid.scss";

const DescriptionGrid = props => {
  let items = null;
  items = props.list.map((item, i) => {
    return (
      //TODO: change key to id
      <React.Fragment key={i}>
        <div
          className={`col-3 spec-cont ${item.type ? item.type : ""} 
          order-${i}`}
        >
          {item.value}
        </div>
        <div
          className={`col-3 spec-desc ${item.type ? item.type : ""}
           order-${i + 4}`}
        >
          {item.desc}
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="col-12 specifics-box">
      <div className="row">{items}</div>
    </div>
  );
};

export default DescriptionGrid;
