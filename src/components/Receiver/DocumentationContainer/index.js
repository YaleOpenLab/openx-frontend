import React from 'react';
import './DocumentationContainer.scss';

const DocumentationContainer = (props) => {
  return(
    <div className="DocumentationContainer">
      <img src={props.icon} alt="archive"/>
      <p>{props.title}</p>
      <span>{props.sub}</span>
    </div>
  )
}

export default DocumentationContainer;