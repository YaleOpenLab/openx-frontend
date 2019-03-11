import React, { Component } from 'react';
import LayoutHoc from '../../hoc/Layout/Layout';
import InvestorComponent from '../../components/Investor/InvestorComponent';

class InvestorContainer extends Component {
    render() {
        return (
            <LayoutHoc>
                <div className="component-content Investor">
                    <InvestorComponent />
                </div>
            </LayoutHoc>
        )
    }
}

export default InvestorContainer;