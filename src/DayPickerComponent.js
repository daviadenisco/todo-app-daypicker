import React, { Component } from 'react';
// import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class DayPickerComponent extends Component {
    constructor(props) {
        super(props);
        this.handleDayChange = this.handleDayChange.bind(this);
        this.state = {
            selectedDay: undefined,
            isEmpty: true,
            isDisabled: false
        }
    }

    handleDayChange(selectedDay, modifiers, dayPickerInput) {
        const input = dayPickerInput.getInput();
        this.setState({
            selectedDay,
            isEmpty: !input.value.trim(),
            isDisabled: modifiers.disabled === true
        })
    }

    render() {
        const { selectedDay, isDisabled, isEmpty } = this.state;
        console.log('selectedDay: ', selectedDay)

        return (
            <span>
        <DayPickerInput
          onDayChange={this.handleDayChange}
        />
            </span>
        )
    }
}

export default DayPickerComponent;