import React from 'react';
import { Button, Navbar, Form, FormControl, Nav } from 'react-bootstrap';
import logo from '../../Image/Logo.png';
import '../Hotel/Hotel.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import photo1 from '../../Image/Rectangle26.png';
import photo2 from '../../Image/Rectangle27.png';
import photo3 from '../../Image/Rectangle28.png';
import StarIcon from '@material-ui/icons/Star';
import Map from '../Map/Map';


const Hotel = () => {
    const[loggedInUser, setLoggedInUser, booking, setBooking] = useContext(UserContext);
    return (
        <div>
            <div>
                <Navbar variant="light" className="nav-container">
                    <div className="logo">
                        <img className="logo-container" src={logo} alt=""/>
                    </div>
                    {/* <Form inline>
                    <FormControl id="destination" type="text" placeholder="Search Your Destination..." className="mr-sm-2" />
                    </Form> */}
                    <Nav className="mr-auto" id="all-nav">
                    <Nav.Link style={{color:'black', marginRight: '40px'}} href="#home">News</Nav.Link>
                    <Nav.Link style={{color:'black', marginRight: '40px'}} href="#features">Destination</Nav.Link>
                    <Nav.Link style={{color:'black', marginRight: '40px'}} href="#pricing">Blog</Nav.Link>
                    <Nav.Link style={{color:'black', marginRight: '40px'}} href="#pricing">Contact</Nav.Link>
                    <Nav.Link style={{color:'black', marginRight: '40px'}} href="#pricing">{loggedInUser.displayName}</Nav.Link>
                    </Nav>
                </Navbar>
                <hr/>
            </div>
            <div className="guest">
                <p>252 Stays, Apr 13-17, 3 Guests</p>
                <h5>Stay in {booking.name} </h5>
                {/* <h5>id:{booking.}</h5> */}
            </div>
            <div className="room-map">
               <div className="col-md-6">
                    <div className="room-detail-1">
                        <div>
                            <img src={photo1} alt=""/>
                        </div>
                        <div className="room-text">
                            <h6>Light Bright airy stylish apt and safe peaceful stay</h6>
                            <p>4 Guests  2 Bedrooms  2 Beds  2 Baths</p>
                            <p>We are air conditioning kitchen</p>
                            <p>Cancellation flexibility available</p>
                            <pre><StarIcon></StarIcon><b>4.9 (20)$34</b>    /night $167 total</pre>
                        </div>
                    </div>

                    <div className="room-detail-1">
                        <div>
                            <img src={photo2} alt=""/>
                        </div>
                        <div className="room-text">
                            <h6>Apartment in Lost Panaroma</h6>
                            <p>4 Guests  2 Bedrooms  2 Beds  2 Baths</p>
                            <p>We are air conditioning kitchen</p>
                            <p>Cancellation flexibility available</p>
                            <pre><StarIcon></StarIcon><b>4.9 (20)$34</b>    /night $167 total</pre>
                        </div>
                    </div>

                    <div className="room-detail-1">
                        <div>
                            <img src={photo3} alt=""/>
                        </div>
                        <div className="room-text">
                            <h6>Light Bright airy stylish apt and safe peaceful stay</h6>
                            <p>4 Guests  2 Bedrooms  2 Beds  2 Baths</p>
                            <p>We are air conditioning kitchen</p>
                            <p>Cancellation flexibility available</p>
                            <pre><StarIcon></StarIcon><b>4.9 (20)$34</b>    /night $167 total</pre>
                        </div>
                    </div>
               </div>
               <div className="col-md-6">
                   <Map></Map>
               </div>
            </div>
        </div>
    );
};

export default Hotel;