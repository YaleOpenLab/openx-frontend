import React, { Component } from 'react';
import LayoutHoc from '../../hoc/Layout/Layout';
import AboutComponent from '../../components/About/AboutComponent';

class AboutContainer extends Component {
    render() {
        return (
            <LayoutHoc>
                <div className="component-content About">
                    <AboutComponent />
                </div>
            </LayoutHoc>
        )
    }
}

export default AboutContainer;