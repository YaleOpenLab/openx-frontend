import React from "react";

const DivBox = props => {
  let output = "";

  switch (props.type) {
    case "full":
      output = (
        <div
          className={`col-${props.col ? props.col : "6"} solar-input-div ${
            props.classes ? props.classes.join(" ") : ""
          }`}
        >
          {props.actionLabel ? (
            <div className="solar-form-action-label">{props.actionLabel}</div>
          ) : null}
          <div className="solar-input-div-box full-box">
            <div className="solar-input-div-left-icon ">
              <div
                className={`solar-icon ${props.leftIcon}`}
                style={
                  props.iconSize
                    ? { height: props.iconSize, width: props.iconSize }
                    : {}
                }
              />
            </div>
            <div className="solar-input-div-text solar-input-full-text">
              {props.text}
            </div>
            <div className="solar-input-div-icon ">
              <div className={props.rightIcon} />
            </div>
          </div>
          <label className="solar-form-label darker-label">{props.label}</label>
        </div>
      );
      break;
    case "long-open":
      let items = "";
      items = props.list.map(item => {
        if (item.type === "primary") {
          return (
            <div
              className="col-4 solar-input-div solar-input-multi"
              key={item.label}
            >
              <div className="solar-form-action-label">{item.actionLabel}</div>
              <div className="solar-input-div-box open-box-light">
                <div className="solar-input-div-left-icon ">
                  <div
                    className={`solar-icon ${item.leftIcon}`}
                    style={
                      props.iconSize
                        ? { height: props.iconSize, width: props.iconSize }
                        : {}
                    }
                  />
                </div>
                <div className="solar-input-div-text">{item.text}</div>
                <div className="solar-input-div-hidden " />
              </div>
              <label className="solar-form-label header-label">
                {item.label}
              </label>
            </div>
          );
        } else {
          return (
            <div
              className="col-4 solar-input-div solar-input-multi"
              key={item.label}
            >
              <div className="solar-form-action-label label-right">
                {item.actionLabel}
              </div>
              <div className="solar-input-div-box open-box-light">
                <div className="solar-input-div-hidden " />
                <div
                  className={`solar-input-div-price-text ${
                    item.type === "last"
                      ? "solar-input-bold"
                      : "solar-input-normal"
                  }`}
                >
                  {item.text}
                </div>
              </div>
              <label className="solar-form-label darker-label label-right">
                {item.label}
              </label>
            </div>
          );
        }
      });
      output = (
        <div
          className={`col-${props.col ? props.col : "6"} ${
            props.classes ? props.classes.join(" ") : ""
          }`}
        >
          <div className="row">{items}</div>
        </div>
      );
      break;
    case "open":
      output = (
        <div
          className={`col-${props.col ? props.col : "6"} solar-input-div  ${
            props.classes ? props.classes.join(" ") : ""
          }`}
        >
          {props.actionLabel ? (
            <div className="solar-form-action-label">{props.actionLabel}</div>
          ) : null}
          <div className="solar-input-div-box open-box-light">
            <div className="solar-input-div-left-icon ">
              <div
                className={`solar-icon ${props.leftIcon}`}
                style={
                  props.iconSize
                    ? { height: props.iconSize, width: props.iconSize }
                    : {}
                }
              />
            </div>
            <div className="solar-input-div-text">{props.text}</div>
            <div className="solar-input-div-hidden " />
          </div>
          <label className="solar-form-label default-open-label darker-label">
            {props.label}
          </label>
        </div>
      );
      break;
    default:
      output = (
        <div
          className={`col-${props.col ? props.col : "6"} solar-input-div  ${
            props.classes ? props.classes.join(" ") : ""
          }`}
        >
          {props.actionLabel ? (
            <div className="solar-form-action-label">{props.actionLabel}</div>
          ) : null}
          <div className="solar-input-div-box open-box-light">
            <div className="solar-input-div-left-icon ">
              <div
                className={`solar-icon ${props.leftIcon}`}
                style={
                  props.iconSize
                    ? { height: props.iconSize, width: props.iconSize }
                    : {}
                }
              />
            </div>
            <div className="solar-input-div-text">{props.text}</div>
            <div className="solar-input-div-hidden " />
          </div>
          <label className="solar-form-label default-open-label darker-label">
            {props.label}
          </label>
        </div>
      );
  }

  return <React.Fragment>{output}</React.Fragment>;
};

export default DivBox;
