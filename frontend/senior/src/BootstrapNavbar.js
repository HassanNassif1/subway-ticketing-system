import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {NavBar, Nav, NavItem,Item,NavDropdown} from 'react-bootstrap';
// import trainnight from './trainnight.jpg';
import "./NavBar.css";
// import './App.css';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function BootstrapNavbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav  className="navbar">
        
        <div className="nav-container">
        {/* <img class="logo-image" src={logo} alt="Logo" /> */}
          <NavLink exact to="/" className="nav-logo">
            Subway Reservation System
            <i className="fas fa-code"></i>
          </NavLink>
          
          <ul className={click ? "nav-menu active" : "nav-menu"}>
           

            <li>
         
        <NavDropdown title="Manage Passengers" id="navbarScrollingDropdown">
        
          <NavDropdown.Item href="/Passengers">Passengers Details</NavDropdown.Item>
          <NavDropdown.Item href="/AddPassengers">Add Passengers </NavDropdown.Item>
          <NavDropdown.Item href="/EditPassengers">Edit Passengers</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/DeletePassengers">
           Remove Passengers
          </NavDropdown.Item>
        </NavDropdown>
        </li>


        <li>
         
         <NavDropdown title="Manage Trains" id="navbarScrollingDropdown">
           <NavDropdown.Item href="/Trains">Trains Details</NavDropdown.Item>
           <NavDropdown.Item href="/AddTrain">Add Trains </NavDropdown.Item>
           <NavDropdown.Item href="/EditTrains">Edit Trains</NavDropdown.Item>
           <NavDropdown.Divider />
           <NavDropdown.Item href="/DeleteTrains">
            Remove Trains
           </NavDropdown.Item>
         </NavDropdown>
         </li>


         <li>
         
         <NavDropdown title="Manage Tickets" id="navbarScrollingDropdown" >
           <NavDropdown.Item href="/Tickets">Tickets Details</NavDropdown.Item>
           <NavDropdown.Item href="/AddTickets">Add Tickets </NavDropdown.Item>
           <NavDropdown.Item href="/EditTickets">Edit Tickets</NavDropdown.Item>
           <NavDropdown.Divider />
           <NavDropdown.Item href="/DeleteTickets">
            Remove Tickets
           </NavDropdown.Item>
         </NavDropdown>
         </li>




         <li>
         
         <NavDropdown title="Manage Employee" id="navbarScrollingDropdown">
           <NavDropdown.Item href="/EmployeeDetails">Employees Details</NavDropdown.Item>
           <NavDropdown.Item href="/AddEmployee">Add Employees </NavDropdown.Item>
           <NavDropdown.Item href="/EditEmployees">Edit Employees</NavDropdown.Item>
           <NavDropdown.Divider />
           <NavDropdown.Item href="/DeleteDrivers">
            Remove Drivers
           </NavDropdown.Item>
           <NavDropdown.Item href="/DeleteWaiter">
            Remove Waiters
           </NavDropdown.Item>
           <NavDropdown.Item href="/DeleteEngineer">
            Remove Engineers
           </NavDropdown.Item>

           <NavDropdown.Item href="/RemoveOperator">
            Remove Operators
           </NavDropdown.Item>

         </NavDropdown>
         </li>





         <li>
         
         <NavDropdown title="Manage Reservation" id="navbarScrollingDropdown">

           <NavDropdown.Item href="/Reservation">Reservation Details</NavDropdown.Item>
           <NavDropdown.Item href="/AddReservations">Add Reservation </NavDropdown.Item>
           <NavDropdown.Item href="/EditReservation">Edit Reservations</NavDropdown.Item>
           <NavDropdown.Divider />
           <NavDropdown.Item href="/DeleteReservation">
            Remove Reservations
           </NavDropdown.Item>
         </NavDropdown>
         </li>


         <li>
         
         <NavDropdown title="Manage Trips" id="navbarScrollingDropdown">

           <NavDropdown.Item href="/Trips">Trips </NavDropdown.Item>
           <NavDropdown.Item href="/AddTrips">Add Trips </NavDropdown.Item>
           <NavDropdown.Item href="/EditTrips">Edit Trips</NavDropdown.Item>
           <NavDropdown.Divider />
           <NavDropdown.Item href="/DeleteTrips">
            Remove Trips
           </NavDropdown.Item>
         </NavDropdown>
         </li>




          </ul>

          
          

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <div>
          <Link to="/"> <Button type='submit'  name="submit"   >Logout</Button></Link>

          </div>
        </div>
        
      </nav><br></br><br></br><br></br><br></br>
      {/* <img  className='Train-wallpaper' src={trainnight} width={'100%'} /> */}
    </>
  );
}

export default BootstrapNavbar;