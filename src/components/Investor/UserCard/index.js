import React from 'react';
import './UserCard.scss';

const UserCard = (props) => {
  return(
    <div className="UserCard col-12 col-md-6 col-lg-3">
      <div className="user-card">
        <div className="user-card-header">
          <img src={props.icon} alt="beneficiary"/>
          <h4>{props.header}</h4>
        </div>
        <div className="user-card-content">
          <div>
            <h4>
              {props.title}
            </h4>
            <p>{props.titleLabel}</p>
          </div>
          <div>
            <h4>{props.value}</h4>
            <p>
              {props.valueLabel}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default UserCard;