import React from 'react';
import './LandingComponent.scss';

import LandingComponentHeader from './LandingComponentHeader/LandingComponentHeader';
import SupportComponent from '../General/SupportComponent/SupportComponent';
import LandingComponentItems from './LandingComponentItems/LandingComponentItems';

const landingComponent = () => {
    return (
        <React.Fragment>
            <LandingComponentHeader />
            <LandingComponentItems />
            <SupportComponent />
        </React.Fragment>
    )
}

export default landingComponent;