import React from 'react';
import "./EmptyContent.scss";

const EmptyContent = props => (
    <div className="EmptyContent">
        <div className="empty-wrapper">
            <p>{props.children}</p>
        </div>
    </div>
);

export default EmptyContent;