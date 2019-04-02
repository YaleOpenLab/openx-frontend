import React from "react";
import './Title.scss';

const Title = props => (
  <div className={'Title' + (props.className ? ` ${props.className}` : '')} key={props.title}>
    <div className="container">
      <h2>{props.title}</h2>
    </div>
  </div>
);

export default Title;