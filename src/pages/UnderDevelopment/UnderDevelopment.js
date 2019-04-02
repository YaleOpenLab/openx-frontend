import React, {Component} from 'react';
import LayoutHoc from '../../hoc/Layout/Layout';
import './UnderDevelopment.scss';
import IconBuild from '../../assets/images/ic-build.svg';

class UnderDevelopment extends Component {
  render() {
    return (
      <LayoutHoc>
        <div className="container UnderDevelopment">
          <img src={IconBuild} alt="Build Icon" />
          <h2>This Section is Under Development</h2>
          <p>The current platform is in prototype stage.
            Many features that we wish to build will be deployed in the second phase of development.
            With more support, we will build faster</p>
        </div>
      </LayoutHoc>
    )
  }
}

export default UnderDevelopment;
