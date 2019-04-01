import React from "react";

const display = (section, index) => {
  switch(section.type) {
    case 'title':
      return (
        <h3 key={index}>{section.value}</h3>
      );
    case 'header':
      return (
        <h4 key={index}>{section.value}</h4>
      );
    case 'text':
      return (
        <p key={index}>{section.value}</p>
      );
    case 'image':
      return (
        <div className="-image" key={index} style={{
          backgroundImage: `url('${section.value}')`,
          height: (section.height ? section.height : 300) + 'px',
        }} />
      );
    default:
      return (
        <p key={index}>{section.value}</p>
      );
  }
};

const CustomSection = props => (
  <div className={`col-md-${props.section.width} CustomSection`}>
    {props.section.content && props.section.content.map(display)}
  </div>
);

export default CustomSection;
