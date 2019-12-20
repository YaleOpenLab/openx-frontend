import React, { Component } from "react";
import {
  MDBNavItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBNavLink
} from "mdbreact";
import Storage from "../../../../services/Storage";
import Routes from "../../../../routes/routes";
import { connect } from "react-redux";
import { fetchUserAccount } from "../../../Profile/store/actions";
import ProfileImage from "../../../../assets/images/user-profile-icon.svg"
import {Observable} from "rxjs";

class UserProfileSection extends Component {
  componentDidMount = () => {
    const username = Storage.get("username");
		if(username) {
			Observable.of(this.props.fetchUserAccount({
				username: username,
			}));
		}
  };

  render() {
    return (
      <div className="profile-nav-box">
        <MDBNavItem className="profile-nav-container nav-item-dropdown">
          <MDBDropdown>
            <MDBDropdownToggle nav caret>
              <div className="d-md-inline">{this.props.account.Name}</div>
            </MDBDropdownToggle>
            <MDBDropdownMenu className="dropdown-default">
              <MDBNavLink
                to={Routes.PROFILE_PAGES.SETTINGS}
                activeClassName="is-active"
              >
                <span>profile</span>
              </MDBNavLink>
              <MDBNavLink to={Routes.LOGOUT} activeClassName="is-active">
                <span>log out</span>
              </MDBNavLink>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>
        <div className="profile-nav-avatar">
          <img
            src={ProfileImage}
            alt="user profile"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  account: state.profile.account.items,
  loading: state.profile.account.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchUserAccount: payload => dispatch(fetchUserAccount(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileSection);
