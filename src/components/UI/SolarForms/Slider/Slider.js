import React from "react";
import InputRange from "react-input-range";
import "react-input-range/src/scss/input-range/input-range.scss";
import "./Slider.scss";

const Slider = props => {
  return (
    <div className="Slider">
      <div className="slider-title">{props.title}</div>
      <div className="slider-container">
        <InputRange
          draggableTrack
          maxValue={props.maxValue}
          minValue={props.minValue}
          onChange={props.onChange}
          onChangeComplete={value => {
            // TODO: handle input change
          }}
          value={props.value}
        />
      </div>
    </div>
  );
};

export default Slider;
