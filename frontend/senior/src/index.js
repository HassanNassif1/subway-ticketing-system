import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Passengers from './/Passengers/Passengers';
import Trains from './/Trains/Trains';
import Tickets from './/Tickets/Tickets';
import Reservation from './/Reservation/Reservation';
import Signin from './/admins/Signin';
import Signin_emp from './employee/Signin_emp';
import Adminpage from './admins/Adminpage';
import Add_Tickets from './Tickets/Add_Tickets';
import Add_Passengers from './Passengers/Add_Passengers';
import Add_Train from './Trains/Add_Train';
import Delete_Passengers from './Passengers/Delete_Passengers';
import Delete_Tickets from './Tickets/Delete_Tickets';
import Delete_Trains from './Trains/Delete_Trains';
import Delete_Drivers from './employee/Delete_Drivers';
import Edit_Passengers from './Passengers/Edit_Passengers';
import Add_Employee from './employee/Add_Employee';
import Delete_Waiters from './employee/Delete_Waiters';
import Delete_Engineer from './employee/Delete_Engineer';
import EmployeeDetails from './employee/EmployeeDetails';
import Edit_Employees from './employee/Edit_Employees';
import Edit_Tickets from './Tickets/Edit_Tickets';
import Edit_Trains from './Trains/Edit_Trains';
import Delete_DataEntry from './employee/Delete_DataEntry';
import Edit_Reservation from './Reservation/Edit_Reservation';
import Add_Reservation from './Reservation/Add_Reservation';
import Delete_Reservations from './Reservation/Delete_Reservations';
import Trips from './Trips/Trips';
import Add_Trips from './Trips/Add_Trips';
import BootstrapNavbar from './BootstrapNavbar';
import Options from './Options/Options';
import Edit_Trips from './Trips/Edit_Trips';
import Delete_Trips from './Trips/Delete_Trips';
import Trips_Schedule from './Trips/Trips_Schedule';
import Signin_driver from './employee/Signin_driver';
import Navbar from './Trips/Navbar';
import Website from './website/Website';
import Home from './website/Home';
import Available_Trips from './website/Available_Trips'
import Signin_User from './website/Signin_user';
import Aboutus from './website/Aboutus';
import Barchart from './website/Barchart';

  ReactDOM.render(
    <React.StrictMode>
      
      <Router>
    <Route path="/Signinadmin"  component ={Signin} />
    <Route path="/" exact component ={Options} />

    <Route path="/admin"  component ={Adminpage} />
    <Route path="/Home"  component ={App} />
    <Route path="/Passengers" component ={Passengers} />
    <Route path="/Trains" component ={Trains} />
    <Route path="/Tickets" component ={Tickets} />
    <Route path="/Reservation" component ={Reservation} />
    <Route path="/EditReservation" component ={Edit_Reservation} />
    <Route path="/AddReservations" component ={Add_Reservation} />
    <Route path="/DeleteReservation" component={Delete_Reservations}/>
    <Route path="/EditEmployees" component ={Edit_Employees} />
    <Route path="/AddTickets" component={Add_Tickets} />
    <Route path="/AddPassengers" component={Add_Passengers} />
    <Route path="/EditPassengers"  component={Edit_Passengers} />
    <Route path="/AddTrain" component={Add_Train} />
    <Route path="/EditTrains" component={Edit_Trains} />
    <Route path="/DeletePassengers" component={Delete_Passengers}/>
    <Route path="/DeleteTickets" component={Delete_Tickets}/>
    <Route path="/EditTickets" component={Edit_Tickets}/>
    <Route path="/DeleteTrains" component={Delete_Trains}/>
    <Route path="/DeleteDrivers" component={Delete_Drivers} />
    <Route path="/AddEmployee" component={Add_Employee}/>
    <Route path="/EmployeeDetails" component={EmployeeDetails}/>
    <Route path="/DeleteWaiter"  component={Delete_Waiters}/>
    <Route path="/DeleteEngineer"  component={Delete_Engineer}/>
    <Route path="/RemoveOperator" component={Delete_DataEntry}/>
    <Route path="/Trips" component={Trips}/>
    <Route path="/AddTrips" component={Add_Trips}/>
    <Route path="/employees" component={Signin_emp}/>
    <Route path="/BootstrapNavbar" component={BootstrapNavbar}/>
    <Route path="/EditTrips" component={Edit_Trips}/>
    <Route path="/DeleteTrips" component={Delete_Trips}/>
    <Route path="/driverlogin" component={Signin_driver} />
    <Route path="/tripschedule" component={Trips_Schedule}/>
    <Route path="/NavBar" component={Navbar}/>
    <Route path="/website" component={Website}/>
    <Route path="/HomePage" component={Home}/>
    <Route path="/availabletrips" component={Available_Trips}/>
    <Route path="/signinuser" component={Signin_User}/>
    <Route path="/Aboutus" component={Aboutus}/>
    <Route path="/barchart" component={Barchart}/>
  </Router>
      
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
