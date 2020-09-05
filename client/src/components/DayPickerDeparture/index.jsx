import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import './styles.css';
import "react-day-picker/lib/style.css";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }

  handleDayChange(day) {
    this.setState({ selectedDay: day });
  }

  render() {
    const { selectedDay } = this.state;
    return (
      <div>
        {selectedDay && <p >Day: {selectedDay.toLocaleDateString()}</p>}
        <DayPickerInput placeholder="Departing" onDayChange={this.handleDayChange}/>
      </div>
    );
  }
}