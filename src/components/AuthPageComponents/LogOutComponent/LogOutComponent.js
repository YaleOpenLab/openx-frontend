import { Component } from "react";
import Storage from "../../../services/Storage";
import history from "../../../helpers/history";
import ROUTES from "../../../routes/routes";
import { logoutUserAccount } from "../../Profile/store/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class LogoutPage extends Component {
  componentDidMount = () => {
    this.props.logoutUserAccount();
  };

  componentWillMount() {
    Storage.remove("token");
    Storage.remove("username");
    history.push(ROUTES.LOGIN);
  }

  render() {
    return null;
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ logoutUserAccount }, dispatch);

export default connect(null, mapDispatchToProps)(LogoutPage);
