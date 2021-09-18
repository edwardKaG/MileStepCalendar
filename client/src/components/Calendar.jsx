import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { Container } from '@material-ui/core';

class CalendarComponent extends Component {
    state = {
        date: new Date()
    };
    onChange = date => {
        this.setState({ date });
    };
    showDay = date => {
        this.props.changeDate(date);
        this.props.handleOpen();
    };

    render() {
        return (
            <Container>
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                    onClickDay={this.showDay}
                />
            </Container>
        );
    }
}

export default CalendarComponent;
