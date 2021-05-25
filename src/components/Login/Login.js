import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Button, Navbar, Form, FormControl, Nav } from 'react-bootstrap';
import logo from '../../Image/Logo.png';
import '../Login/Login.css';
import FacebookIcon from '@material-ui/icons/Facebook';
// import { AiFillGoogleCircle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';



firebase.initializeApp(firebaseConfig);


const Login = () => {

    const [user, setUser] = useState({
        isSignedIn: false,
        firstName: '',
        lastName: '',
        displayName: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false,
        confirmPassword: ''
    })

    const [passStatus, setPassStatus] = useState('');
    const [newUser, setNewUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const fbProvider = new firebase.auth.FacebookAuthProvider();

    const handleFbSignIn = () => {   
    firebase.auth().signInWithPopup(fbProvider)
    .then(function(result) {
        const fbUser = result.user;
        const {displayName, email, photoURL} = fbUser;
        const newUser = {
            name: displayName,
            email: email || 'example@example.com'
        }
        setLoggedInUser(newUser);
        setUser(newUser);
        history.replace(from);
        // const user = result.user;
        // console.log('after sign in', user);
        
      }).catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    }

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const {displayName, email} = result.user;
                const newUserInfo = {name: displayName, email};
                // const newUserInfo = {...user};
                // setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.replace(from);

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

    const updateUserProfile = (name) => {
        console.log(name);
        const newUser = firebase.auth().currentUser;
        newUser.updateProfile({
            displayName: name,
        })
        .then(result => {
            console.log('Updated profile');
            console.log(result);
        })
        .catch(function(error) {
            console.log(error)
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(user.email, user.password, user.firstName);
        if(newUser && user.email && user.password && user.password === user.confirmPassword){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then( res => {
                    const newUserInfo = {...res.user}
                    console.log(res);
                    const name = user.firstName+ ' ' +user.lastName;
                    console.log(name);
                    newUserInfo.displayName = name;
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setLoggedInUser(newUserInfo);
                    setUser(newUserInfo);
                    updateUserProfile(name);
                    // console.log(loggedInUser);
                    console.log(user.displayName);
                    setPassStatus('');
                    // console.log(newUserInfo);
                    history.replace(from);
                })
                .catch((error) => {
                    // var errorCode = error.code;
                    // var errorMessage = error.message;
                    // console.log(errorCode, errorMessage);
    
                    const newUserInfo = {...user}
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
            }
            if(newUser && user.password != user.confirmPassword){
                setPassStatus('Password does not match');
            }if(user.name){
                setLoggedInUser(e.target.value);
            }
    
            if(!newUser && user.email && user.password){
                firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = {...res.user}
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setLoggedInUser(newUserInfo);
                    setUser(newUserInfo);
                    console.log(newUserInfo);
                    history.replace(from);
                    
                })
                .catch((error) => {
                    const newUserInfo = {...user}
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
            }
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
                    <form action="" onSubmit={handleSubmit}>
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
            <div className="passStatus">
                <p>{passStatus}</p>
            </div>
            <div className="error">
                <p>{user.error}</p>
            </div>
            <div className="google-facebook">
                <div className="google">
                    <button onClick={handleGoogleSignIn}><FcGoogle></FcGoogle> Continue With Google</button>
                </div>
                <div className="facebook">
                    <button onClick={handleFbSignIn}><FacebookIcon></FacebookIcon> Continue With Facebook</button>
                </div>
            </div>
        </div>
    );
};

export default Login;