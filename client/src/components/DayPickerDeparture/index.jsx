import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import './styles.css';

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
    const event = {
      target: {
        name: "startDate",
        value: day
      }
    }
    this.props.onChange(event);
    // console.log({day,a,b,c});
  }

  render() {
    const { selectedDay } = this.state;
    return (
      <div>
        {selectedDay && <p >Day: {selectedDay.toLocaleDateString()}</p>}
        {!selectedDay && <p className="departing">Departing</p>}
        <DayPickerInput onDayChange={this.handleDayChange} />
      </div>
    );
  }
}