import React, { Component } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

class DayPickerComponent extends Component {
  render() {
    return <DayPicker
      initialMonth={new Date(2017, 3)}
      selectedDays={[
        {
          after: new Date(2017, 3, 20),
          before: new Date(2017, 3, 25),
        }
      ]}
    />;
  }
}

export default DayPickerComponent;