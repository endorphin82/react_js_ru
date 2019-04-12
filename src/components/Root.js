import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import App from "./App";

const Root = (props) => {
  return (
    <Provider store={store}>
      <App {...props} />
    </Provider>
  );
};

export default Root;