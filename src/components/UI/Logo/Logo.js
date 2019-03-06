import React from 'react';
import './Logo.scss';
import { NavLink } from 'react-router-dom';

const logo = props => (
    <NavLink to={"/"}>
    <div className={"Logo"} style={{width: props.width}}>
        <span className={"FirstPart"}>open</span><span className={"SecondPart"}>solar</span>
    </div>
    </NavLink>
);

export default logo;
