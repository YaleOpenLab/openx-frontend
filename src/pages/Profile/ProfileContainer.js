import React, { Component } from 'react';
import LayoutHoc from '../../hoc/Layout/Layout';
import ProfileComponent from '../../components/Profile/ProfileComponent';

class ProfileContainer extends Component {
    render() {
        return (
            <LayoutHoc>
                <div className="component-content Profile">
                    <ProfileComponent />
                </div>
            </LayoutHoc>
        )
    }
}

export default ProfileContainer;