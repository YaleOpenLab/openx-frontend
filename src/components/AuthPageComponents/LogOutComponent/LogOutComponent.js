import { Component } from "react";
import Storage from "../../../services/Storage";
import history from "../../../helpers/history";
import ROUTES from "../../../routes/routes";

class LogoutPage extends Component {
  componentWillMount() {
    Storage.clear();
    history.push(ROUTES.LOGIN);
  }

  render() {
    return null;
  }
}

export default LogoutPage;
