import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../Home/Home.css';
import { Button, Navbar, Form, FormControl, Nav } from 'react-bootstrap';
import logo from '../../Image/Logo2.png';
import data from '../../components/FakeData/FakeData.json';
import '../../components/Booking/Booking.css';

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const Booking = () => {

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
      };

    const {id, name} = useParams();
    const [places] = useState(data);
    const [booking, setBooking] = useState({});

    useEffect(() => {
        const selectedBooking = places.find(place=> place.id === parseInt(id));
        setBooking(selectedBooking);
    }, [booking])

    return (
        <div className="home">
            <Navbar variant="light" className="nav-container">
                <img className="logo-container" src={logo} alt=""/>
                <Form inline>
                <FormControl id="destination" type="text" placeholder="Search Your Destination..." className="mr-sm-2" />
                </Form>
                <Nav className="mr-auto">
                <Nav.Link style={{color:'white', marginRight: '40px'}} href="#home">News</Nav.Link>
                <Nav.Link style={{color:'white', marginRight: '40px'}} href="#features">Destination</Nav.Link>
                <Nav.Link style={{color:'white', marginRight: '40px'}} href="#pricing">Blog</Nav.Link>
                <Nav.Link style={{color:'white', marginRight: '40px'}} href="#pricing">Content</Nav.Link>
                <Button variant="warning">Log In</Button>
                </Nav>
            </Navbar>

            <div className="Place-container">
                <div className="col-md-4 booking-name">
                    <h1>{booking.name}</h1>
                    <p>{booking.fullDes}</p>
                </div>
                <div className="booking-date">
                    <div className="location">
                        <p>Origin</p>
                        <input type="text" name="" id="" placeholder=""/>
                        <p>Destination</p>
                        <input type="text" name="" id="" placeholder=""/>
                    </div>
                    <div className="date-container">
                        <div style={{width: '50%', marginLeft: '20px'}}>
                            <p>From</p>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                // label="Date picker inline"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                        </div>

                        <div style={{width: '50%', marginLeft: '20px', marginRight: '15px'}}>
                            <p>To</p>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                // label="Date picker inline"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                        </div>
                    </div>
                    <div className="start-booking">
                        <button>Start Booking</button>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default Booking;