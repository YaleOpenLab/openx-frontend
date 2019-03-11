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

const epicMiddleware = createEpicMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(epicMiddleware))
);
epicMiddleware.run(rootEpic);

const AppComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(AppComponent, document.getElementById("root"));

serviceWorker.unregister();
