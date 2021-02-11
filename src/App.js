import React from 'react';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';


function App() {
  return (
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

        <Route path='/login/:selectedId'>
          <Login></Login>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
