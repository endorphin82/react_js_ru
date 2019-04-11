import React, { Component } from "react";
import DayPicker, { DateUtils } from "react-day-picker";

import "react-day-picker/lib/style.css";

class DayPickerComponent extends Component {
  state = {
    from: null,
    to: null
  };

  handleDayClick = (day) => {
    this.setState(DateUtils.addDayToRange(day, this.state));
  };

  render() {
    const { from, to } = this.state;
    const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()} `;
    return (
      <div className="date-range">
        <DayPicker
          initialMonth={new Date(2017, 3)}
          onDayClick={this.handleDayClick}
          selectedDays={day => DateUtils.isDayInRange(day, { from, to })}
        />
        {selectedRange}
      </div>
    );
  }
}

export default DayPickerComponent;