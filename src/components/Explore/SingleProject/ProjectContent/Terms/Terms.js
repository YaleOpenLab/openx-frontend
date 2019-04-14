import React, {Component} from 'react';
import './Terms.scss';
import IcKeyboard from '../../../../../assets/images/ic_keyboard.png';
import ScrollableAnchor from 'react-scrollable-anchor';
import TermsTable from './TermsTable/TermsTable';
import Title from '../../../../General/Title/Title';

class Terms extends Component {

    state = {
      collapsed: true,
    };

  handleCollapse = () => {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed,
    }));
  };

  render() {
    return (
      <ScrollableAnchor id={'terms'}>
        <section className="Terms">
          <Title className="-no-border" title="Terms" />
          <div className="container">
            <div className="row">
              <div className="col-12 text-description">
                <div className="sub-title">
                  Purpose
                </div>
                {
                  this.props.data.FEText && this.props.data.FEText.terms && this.props.data.FEText.terms.description && (
                    <div className="sub-desc">
                      {this.props.data.FEText.terms.description}
                    </div>
                  )
                }
              </div>
              <div className={(this.state.collapsed ? '' : '-minimized ') + "col-12 project-table no-padding"}>
                <div className="col-12">
                  <div className="table-wrapper">
                    <TermsTable
                      data={this.props.data.Terms}
                      handleCollapse={this.handleCollapse}
                    />
                    <button className={(this.state.collapsed ? '' : '-closed ') + "collapse-button"} onClick={this.handleCollapse}>
                      <img src={IcKeyboard} alt="keyboard" />
                    </button>
                  </div>
                </div>
                </div>
              <div className="col-12 security-note">
                <div className="security-title">security note</div>
                <div className="security-text">
                  These terms are for demonstration purpose only. The current project does not correspond to an actual
                  issued security and offered by a registered broker dealer. If it was, this note would provide legal
                  disclaimers and notes about the security asset.
                  <a href="/"> Learn more ></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollableAnchor>
    )
  }
};

export default Terms;
