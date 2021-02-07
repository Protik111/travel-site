import React, { useState } from 'react';
import logo from '../../Image/Logo2.png';
import { Button, Navbar, Form, FormControl, Nav } from 'react-bootstrap';
import '../Home/Home.css';
import { useHistory } from 'react-router-dom';
import Place from '../Place/Place';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';



const Home = () => {
    const data = [
        {
            id : 1,
            name : "COX'S BAZAR",
            description : "Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south.",
            image : "https://i.ibb.co/3kpVYs6/cox.png"
        },
        {
            id : 2,
            name : "BANDARBAN",
            description : "Bandarban is a district in South-Eastern Bangladesh, and a part of the Chittagong Division. It is one of the three hill districts of Bangladesh and a part of the",
            image : "https://i.ibb.co/RDS6TF7/Sreemongol.png"
        },
        {
            id : 3,
            name : "SAJEK",
            description : "Sajek an emerging tourist spot in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District. Sajek valley is known as the Queen of Hills & Roof of Rangamati.",
            image : "https://i.ibb.co/HX4STdp/sundorbon.png"
        }
    ]

    const history = useHistory();

    const [selectedPlace, setSelectedPlace] = useState(data[0]);

    const handleClick = (data) => {
        setSelectedPlace(data);
    }
    const handleBooking =() => {
        history.push( `/booking/${selectedPlace.id}`);
    }

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

            <div className="row places-row">
                <div className="col-md-4 heading">
                    <h1>{selectedPlace.name}</h1>
                    <p>{selectedPlace.description}</p>
                    <button onClick={handleBooking} className="booking-btn">Booking <ArrowRightAltIcon></ArrowRightAltIcon></button>
                </div>
                <div className="pictures">
                {
                    data.map(place => <Place handleClick={handleClick} selectedPlace={selectedPlace} data={place}></Place>)
                }
                </div>
            </div>

        </div>
    );
};

export default Home;