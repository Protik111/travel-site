import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Button, Navbar, Form, FormControl, Nav } from 'react-bootstrap';
import logo from '../../Image/Logo.png';
import '../Login/Login.css';


firebase.initializeApp(firebaseConfig);


const Login = () => {

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false
    })

    const [newUser, setNewUser] = useState(false);


    const handleGoogleSignIn = () => {
        var googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                console.log(user);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }


    const handleBlur = (event) => {
        let isFormValid = true;
        if (event.target.name === 'email') {
            isFormValid = /\S+@\S+|.S+/.test(event.target.value);
        }
        if (event.target.name === 'password') {
            const isPasswordValid = event.target.value.length > 6;
            const hasPasswordNumber = /\d{1}/.test(event.target.value);
            isFormValid = isPasswordValid && hasPasswordNumber;
        }

        // if(event.target.name === 'password2'){
        //     const confrimPassword = event.target.value;
        //     // console.log(confrimPassword);
        //     if(event.target.value === password) {
        //         console.log('matched');
        //     }
        // }

        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            // console.log(newUserInfo);
            setUser(newUserInfo);
        }
    }

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
                    <Nav.Link style={{color:'black', marginRight: '40px'}} href="#pricing">Content</Nav.Link>
                    <Button variant="warning">Log In</Button>
                    </Nav>
                </Navbar>
            </div>
            <div className="log-container">
                <div className="log-container2">
                    <h3>{newUser? 'Sign Up' : 'Log In'}</h3>
                    <form action="">
                        {newUser && <input onBlur={handleBlur} type="text" name="firstName" id="" className="all-input" placeholder="First Name" required />}
                        <br />
                        {newUser && <input onBlur={handleBlur} type="text" name="lastName" id="" className="all-input" placeholder="Last Name" required />}
                        <br />
                        <input onBlur={handleBlur} type="text" name="email" id="" className="all-input" placeholder="Username or Email" required />
                        <br />
                        <input onBlur={handleBlur} type="password" name="password" id="" className="all-input" placeholder="Password" required />
                        <br/>
                        {/* <input type="checkbox" name="" id=""/>
                        <label htmlFor="forget">Remember Me</label>
                        <br /> */}
                        {newUser && <input onBlur={handleBlur} type="password" name="confirmPassword" id=""className="all-input"  placeholder="Confirm Password" required />}
                        <br />
                        <input type="submit" className="logbtn" value={newUser? 'Sign Up' : 'Log In'}/>
                    </form>
                    <div className="new-user">
                        <label htmlFor="newUser">{newUser? "Already have an account?" : "Don't have an account?"}</label>
                        <button onClick={() => setNewUser(!newUser)} name="newUser">{newUser? 'Login' :'Create an account'}</button>
                    </div>
                </div>
            </div>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;