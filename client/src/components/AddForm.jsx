import React, { Component } from 'react';

class AddForm extends Component {
    state = {
        name: "",
        description: ""
    };
    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.addEvent(this.props.activeDate, this.state);
        this.setState({
            name: "",
            description: ""
        });
    };
    handleClose = () => {
        this.props.handleClose();
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    className="input-field"
                    onChange={this.handleChange}
                    value={this.state.name}
                />
                <label htmlFor="description">Description</label>
                <input
                    id="description"
                    type="text"
                    className="input-field"
                    onChange={this.handleChange}
                    value={this.state.description}
                />
                <button className="waves-effect waves-light btn-small">
                    Add Event
                </button>

                <button
                    onClick={this.handleClose}
                >
                    Close
                </button>
            </form>
        );
    }
}

export default AddForm;
