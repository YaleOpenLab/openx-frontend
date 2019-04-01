import React from "react";

const display = section => {
  switch(section.type) {
    case 'header':
      return (
        <h4>{section.value}</h4>
      );
    case 'text':
      return (
        <p>{section.value}</p>
      );
    case 'image':
      return (
        <img src={section.value} />
      );
    default:
      return (
        <p>{section.value}</p>
      );
  }
};

const CustomSection = props => (
  <div className={`col-md-${props.section.width} CustomSection`}>
    {props.section.content && props.section.content.map(display)}
  </div>
);

export default CustomSection;
