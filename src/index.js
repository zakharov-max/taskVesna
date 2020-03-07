import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "mobx-react";
import { CatsStore } from "./stores/catsStore";
import * as serviceWorker from "./serviceWorker";

const catsStore = new CatsStore();

ReactDOM.render(
  <Provider catsStore={catsStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
