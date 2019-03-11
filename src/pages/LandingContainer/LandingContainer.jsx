import React, { Component } from 'react';
import LayoutHoc from '../../hoc/Layout/Layout';
import LandingComponent from '../../components/LandingComponent/LandingComponent';

class LandingContainer extends Component {
    render() {
        return (
            <LayoutHoc>
                <div className="component-content landing">
                    <LandingComponent />
                </div>
            </LayoutHoc>
        )
    }
}

export default LandingContainer;