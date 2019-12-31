import React from "react";
import history from "../../../helpers/history";

const DivBox = ({type, col, classes, actionLabel, link, leftIcon, rightIcon, iconSize, text, label, list}) => {
  let output = "";

  const handleRedirection = (link) => {
  	history.push(link)
	};

  switch (type) {
    case "full":
      output = (
        <div
          className={`col-${col ? col : "6"} solar-input-div ${
            classes ? classes.join(" ") : ""
          }`}
					onClick={() => handleRedirection(link)}
        >
          {actionLabel ? (
            <div className="solar-form-action-label">{actionLabel}</div>
          ) : null}
          <div className="solar-input-div-box full-box">
            <div className="solar-input-div-left-icon ">
              <div
                className={`solar-icon ${leftIcon}`}
                style={
                  iconSize
                    ? { height: iconSize, width: iconSize }
                    : {}
                }
              />
            </div>
            <div className="solar-input-div-text solar-input-full-text">
              {text}
            </div>
            <div className="solar-input-div-icon ">
              <div className={rightIcon} />
            </div>
          </div>
          <label className="solar-form-label darker-label">{label}</label>
        </div>
      );
      break;
    case "long-open":
      let items = "";
      items = list.map(item => {
        if (item.type === "primary") {
          return (
            <div
              className="col-4 solar-input-div solar-input-multi"
              key={item.label}
							onClick={() => handleRedirection(item.link)}
            >
              <div className="solar-form-action-label" onClick={() => handleRedirection(item.actionLabelLink)}>{item.actionLabel}</div>
              <div className="solar-input-div-box open-box-light">
                <div className="solar-input-div-left-icon ">
                  <div
                    className={`solar-icon ${item.leftIcon}`}
                    style={
                      iconSize
                        ? { height: iconSize, width: iconSize }
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
							onClick={() => handleRedirection(item.link)}
						>
              <div className="solar-form-action-label label-right"
									 onClick={() => handleRedirection(item.actionLabelLink)}
							>
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
          className={`col-${col ? col : "6"} ${
            classes ? classes.join(" ") : ""
          }`}
        >
          <div className="row">{items}</div>
        </div>
      );
      break;
    case "open":
      output = (
        <div
          className={`col-${col ? col : "6"} solar-input-div  ${
            classes ? classes.join(" ") : ""
          }`}
				>
          {actionLabel ? (
            <div className="solar-form-action-label">{actionLabel}</div>
          ) : null}
          <div className="solar-input-div-box open-box-light">
            <div className="solar-input-div-left-icon ">
              <div
                className={`solar-icon ${leftIcon}`}
                style={
                  iconSize
                    ? { height: iconSize, width: iconSize }
                    : {}
                }
              />
            </div>
            <div className="solar-input-div-text">{text}</div>
            <div className="solar-input-div-hidden " />
          </div>
          <label className="solar-form-label default-open-label darker-label">
            {label}
          </label>
        </div>
      );
      break;
    default:
      output = (
        <div
          className={`col-${col ? col : "6"} solar-input-div  ${
            classes ? classes.join(" ") : ""
          }`}
        >
          {actionLabel ? (
            <div className="solar-form-action-label">{actionLabel}</div>
          ) : null}
          <div className="solar-input-div-box open-box-light">
            <div className="solar-input-div-left-icon ">
              <div
                className={`solar-icon ${leftIcon}`}
                style={
                  iconSize
                    ? { height: iconSize, width: iconSize }
                    : {}
                }
              />
            </div>
            <div className="solar-input-div-text">{text}</div>
            <div className="solar-input-div-hidden " />
          </div>
          <label className="solar-form-label default-open-label darker-label">
            {label}
          </label>
        </div>
      );
  }

  return <React.Fragment>{output}</React.Fragment>;
};

export default DivBox;
