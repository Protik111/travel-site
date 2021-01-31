import React from 'react';
import logo from '../../Image/Logo2.png';
import { Button, Navbar, Form, FormControl, Nav } from 'react-bootstrap';
import '../Home/Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

const Home = () => {
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

            
            <Swiper
                spaceBetween={50}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper>
        </div>
    );
};

export default Home;