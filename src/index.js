import React from "react";
import { render } from "react-dom";
import { articles } from "./fixtures";
import Root from "./components/Root";

render(<Root articles={articles}/>,
  document.getElementById("container"));
