import React from 'react';
import './LinkContainer.scss';

const LinkContainer = (props) => {
  return(
    <div className="LinkContainer">
      <img src={props.icon} alt="checked"/>
      <button>{props.value}</button>
    </div>
  )
};

export default LinkContainer;