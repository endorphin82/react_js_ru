import React, { Component } from "react";
import PropTypes from "prop-types";
import SelectFilter from "./SelectFilter";
import DayPickerComponent from "./DayPickerComponent";

class Filters extends Component {
  static propTypes = {
    articles: PropTypes.array
  };

  render() {
    return (
      <div>
        <SelectFilter />
        <DayPickerComponent />
      </div>
    );
  }
}

export default Filters;