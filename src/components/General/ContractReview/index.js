import React from 'react';
import './ContractReview.scss';

const ContractReview = ({data, title}) => {
  return(
    <>
      <div className="ContractReview">
        <div className="review-box">
          <p>{title}</p>
        </div>
        <div className="flexbox">
          {data.map(data =>(
            <div className="LinkContainer">
              <img src={data.icon} alt="checked"/>
              <button>{data.label}</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
};

export default ContractReview;