import React, { Component } from 'react';
import LayoutHoc from '../../hoc/Layout/Layout';

class LoginContainer extends Component {
    render() {
        return (
            <LayoutHoc>
                <div className="component-content">Protected Page</div>
            </LayoutHoc>
        )
    }
}

export default LoginContainer;