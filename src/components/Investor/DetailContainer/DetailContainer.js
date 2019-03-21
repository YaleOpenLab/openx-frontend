import React from 'react';
import IconInfo from '../../../assets/images/ic-info.svg';
import IconDoc from '../../../assets/images/ic-terms-doc.svg';
import './DetailContainer.scss';

const DetailContainer = (props) => {
  return(
    <>
      <div className="DetailContainer">
        <div className="row">
          <div className="col-lg-6">
            <div className="flexbox">
              <img src={props.icon} alt="icon" className="icon"/>
              <img src={IconInfo} alt="info"/>
              <p>
                {props.title}
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="flexbox -space">
              <h4>{props.type}</h4>
              <p className="-light">{props.action}</p>
              <button><img src={IconDoc} alt="doc"/></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default  DetailContainer;