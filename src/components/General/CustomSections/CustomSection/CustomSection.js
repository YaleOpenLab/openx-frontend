import React from "react";

const display = section => {
  switch(section.type) {
    case 'title':
      return (
        <h3>{section.value}</h3>
      );
    case 'header':
      return (
        <h4>{section.value}</h4>
      );
    case 'text':
      return (
        <p className={section.highlight ? '-highlight' : ''}>{section.value}</p>
      );
    case 'image':
      return (
        <>
          <div className="-image" style={{
            'background-image': `url('${section.value}')`,
            'height': (section.height ? section.height : 300) + 'px',
          }} />
          {section.imageTitle !== '' && <span className='subtitle'>{section.imageTitle}</span>}
        </>
      );
    case 'link':
      return (
        <a href={section.link}>{section.value}</a>
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
