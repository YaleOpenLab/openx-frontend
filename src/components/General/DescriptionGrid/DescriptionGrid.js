import React from "react";
import "./DescriptionGrid.scss";
import chunkArray from "../../../helpers/functions/chunk-array";

const DescriptionGrid = props => {
  let items = null;

  if (props.list) {
    let splitList = chunkArray(props.list, 4);
    items = splitList.map((item, i) => {
      return (
        <div className="col-12 specifics-box" key={i}>
          <div className="row">
            {item.map((item, i) => {
              return (
                <React.Fragment key={i}>
                  <div
                    className={`col-3 spec-cont ${item.type ? item.type : ""} 
        order-${i}`}
                  >
                    {item.value}
                    {item.icon ? (
                      <div className="spec-icon-info info-icon" />
                    ) : (
                      ""
                    )}
                  </div>
                  <div
                    className={`col-3 spec-desc ${item.type ? item.type : ""}
         order-${i + 4}`}
                  >
                    {item.desc}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      );
    });
  }

  return <React.Fragment>{items}</React.Fragment>;
};

export default DescriptionGrid;
