import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers";
import { rootEpic } from "./store/epics";
import { BrowserRouter, Router } from "react-router-dom";
import history from "./helpers/history";
import ErrorHandler from "./components/UI/ErrorHandler/ErrorHandler";

const epicMiddleware = createEpicMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(epicMiddleware))
);
epicMiddleware.run(rootEpic);

const AppComponent = (
  <Provider store={store}>
    <ErrorHandler>
      <BrowserRouter forceRefresh={true}>
        <Router history={history}>
          <App />
        </Router>
      </BrowserRouter>
    </ErrorHandler>
  </Provider>
);

ReactDOM.render(AppComponent, document.getElementById("root"));

serviceWorker.unregister();
