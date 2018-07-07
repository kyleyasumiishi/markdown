import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  // <Provider store={store}>
  <App />,
  // </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
