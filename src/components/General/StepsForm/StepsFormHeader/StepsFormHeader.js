import React from "react";
import "./StepsFormHeader.scss";

const StepsFormHeader = props => {
  let items = null;

  if (props.tabs) {
    const length = props.tabs.length;
    items = props.tabs.map((item, i) => {
      let count = i + 1;
      if (length === count) {
        return (
          <React.Fragment key={item.key}>
            <div className="steps-box steps-last-box">
              <div
                className={
                  props.active === count ? "steps-active" : "steps-inactive"
                }
              />
              <div
                className={`steps-title ${
                  props.active === count
                    ? "steps-active-title"
                    : "steps-inactive-title"
                }`}
              >
                {item.name}
              </div>
            </div>
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment key={item.key}>
            <div
              className={`steps-box ${count === 1 ? "steps-first-box" : ""}`}
            >
              <div
                className={
                  props.active === count ? "steps-active" : "steps-inactive"
                }
              />
              <div
                className={`steps-title ${
                  props.active === count
                    ? "steps-active-title"
                    : "steps-inactive-title"
                }`}
              >
                {item.name}
              </div>
            </div>
            <span className="divider" />
          </React.Fragment>
        );
      }
    });
  }

  return (
    <div className="col-12 col-md-10 col-lg-8 mx-auto">
      <div className="row steps-form-header">
        <div className="col-10 mx-auto">
          <div
            className={`steps-container ${
              props.classes ? props.classes.join(" ") : ""
            }`}
          >
            {items}
          </div>
        </div>
      </div>
      {props.separator === false ? null : (
        <div className="col-12 solar-form-separator" />
      )}
    </div>
  );
};

export default StepsFormHeader;
