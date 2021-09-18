import React, { Component, useContext, useEffect, useState} from 'react';
import LoginForm from './components/loginForm';
import {observer} from 'mobx-react-lite';
import {Context} from './index';
import { Container, Grid, Button } from "@material-ui/core";
import UserService from './services/UserService';

import EventsModal from './components/EventsModal';

// const { store } = useContext(Context);
// const [activeDate, setActiveDate] = useState(new Date().toLocaleDateString());
// const [events, setEvents] = useState([]);



// useEffect(() => {
//     if (localStorage.getItem('token')) {
//         store.checkAuth();
//     }
// }, []);
//
// if (store.isLoading) {
//     return <div>Loading</div>
// }
// console.log(store.isAuth)
//   if (!store.isAuth) {
//     return (
//         <div>
//           <LoginForm/>
//         </div>
//     );
//   }
//IT works with functions


class App extends Component {
    state = {
        activeDate: new Date().toLocaleDateString(),
        events: []
    };

    componentDidMount() {
        this.setState(
            {
            events: [
                {
                    "id": 1,
                    "name": "React",
                    "description": "Learn react",
                    "date": "10/9/2021"
                },
                {
                    "id": 2,
                    "name": "Code",
                    "description": "Code react",
                    "date": "20/9/2021"
                },
            ]
        })
    }

    changeDate = selectedDate => {
        this.setState({
            activeDate: selectedDate.toLocaleDateString()
        });
    };
    getEvents = date => {
        const eventsList = this.state.events.filter(event => {
            return event.date === date;
        });
        return eventsList;
    };
    addEvent = (date, event) => {
        event.date = date;
        event.id = this.state.events.length + 1;
        const events = [...this.state.events, event];
        this.setState({
            events: events
        });
    };
    deleteEvent = id => {
        const events = this.state.events.filter(event => {
            return event.id !== id;
        });
        this.setState({
            events: events
        });
    };


    render() {
        return (
            <div>
                {/*<h1>{store.isAuth ? `User is authorized ${store.user.email}` : 'Authorize'}</h1>*/}
                {/*<h1>{store.user.isActivated ? 'Account confirmed by email' : 'Confirm the Account!!!!'}</h1>*!/*/}
                {/*<Button  onClick={() => store.logout()} variant="contained" component="span">Log Out</Button>*/}
                <Container>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <EventsModal
                            changeDate={this.changeDate}
                            activeDate={this.state.activeDate}
                            events={this.getEvents(this.state.activeDate) /*store.getEvents*/}
                            deleteEvent={this.deleteEvent /*store.deleteEvent*/}
                            addEvent={this.addEvent /*store.addEvent*/}
                        />
                    </Grid>
                </Container>
            </div>
        );
    }
}


export default App;