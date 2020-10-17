import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/HomePage/Home/Home';
import PrivateRoute from './components/Shared/PrivateRoute/PrivateRoute';
import Booking from './components/BookingPage/Booking/Booking';
import Destination from './components/DestinationPage/Destination/Destination';
import Login from './components/Shared/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Shared/Header/Header';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        {/* <Header></Header> */}
          <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/places/:placeId">
                <Booking></Booking>
              </Route>
              <PrivateRoute exact path="/destination/:placeName">
                <Destination></Destination>
              </PrivateRoute>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
          </Switch> 
      </Router>
    </UserContext.Provider>
  );
}

export default App;
