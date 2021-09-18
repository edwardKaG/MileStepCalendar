import React from 'react';
import AddForm from './AddForm';

const Events = ({ activeDate, events, deleteEvent, addEvent, handleClose }) => {
    const eventsList = events.length ? (
        events.map(event => {
            return (
                <tr key={event.id}>
                    <td>{event.name}</td>
                    <td>{event.description}</td>
                    <td>
                        <button
                            onClick={() => {
                                deleteEvent(event.id);
                            }}
                            className="waves-effect waves-light btn"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            );
        })
    ) : (
        <tr>
            <td>You have no events!</td>
        </tr>
    );

    return (
        <div className="card blue-white darken-1">
            <div className="card-content black-text">
                <div className="card-title">Events for {activeDate}</div>
                <div className="card-content">
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Item Name</th>
                            <th>Item Price</th>
                        </tr>
                        </thead>
                        <tbody>{eventsList}</tbody>
                    </table>
                </div>
                <div className="card-action">
                    <AddForm
                        addEvent={addEvent}
                        activeDate={activeDate}
                        handleClose={handleClose}
                    />
                </div>
            </div>
        </div>
    );
};

export default Events;
