import React from 'react';
import './Footer.scss';
import Logo from '../../UI/Logo/Logo';

const footer = props => (
    <div>
        <div className={"Footer"}>
            <Logo width={"250px"} />
            <div className={`Sources d-flex justify-content-around`}>
                <div>open source licenses & links</div>
                <nav>
                </nav>
            </div>
        </div>
    </div>
);

export default footer;