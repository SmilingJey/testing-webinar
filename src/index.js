import React from "react";
import ReactDOM from "react-dom";
import { /*BrowserRouter,*/ HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/App";
import store from "./store/store"

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

