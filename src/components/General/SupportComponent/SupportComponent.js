import React from 'react';
import './SupportComponent.scss';

const supportComponent = props => {
    return (
        <div className="support">
            <div className="content">
                <div className=""><p className="text">Support OpenSolar</p></div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 col-centered text-box">crowdfund the platform ></div>
            </div>
        </div>
    );
}

export default supportComponent;