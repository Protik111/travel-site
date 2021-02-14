import React, { createContext, useState } from 'react';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';
import Hotel from './components/Hotel/Hotel';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();


function App() {
  const[loggedInUser, setLoggedInUser] = useState({});
  const [booking, setBooking] = useState({});


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, booking, setBooking]}>
      {/* <h3>email :{loggedInUser.email}</h3>
      <h3>Name : {loggedInUser.displayName}</h3> */}
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path='/booking/:id'>
          <Booking></Booking>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>
        
        <PrivateRoute path='/hotel/:selectedId'>
          <Hotel></Hotel>
        </PrivateRoute>


      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
