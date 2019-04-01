import React, { Component } from 'react';
import LayoutHoc from '../../hoc/Layout/Layout';
import AboutComponent from '../../components/About/AboutComponent';

class AboutContainer extends Component {
    componentDidMount = () => {
        window.scrollTo(0, 0);
    }
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