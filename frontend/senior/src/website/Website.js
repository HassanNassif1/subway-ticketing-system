import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {NavBar, Nav, NavItem,Item,NavDropdown} from 'react-bootstrap';
// import trainnight from './trainnight.jpg';
import "./Navweb.css";
// import './App.css';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Website() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav  className="navbarr">
     
        <div className="nav-container">
        {/* <img class="logo-image" src={logo} alt="Logo" /> */}


          {/* <NavLink exact to="/" className="nav-logo">
            Subway Reservation System
            <i className="fas fa-code"></i>
          </NavLink> */}
          
          <ul className={click ? "nav-menu active" : "nav-menu"}>
           

            <li>
            
            <NavLink exact to="/HomePage" className='Links'>
            Home
            <i className="fas fa-code"></i>
          </NavLink>
        </li>


        <li>
         
        <NavLink exact to="/Aboutus" className='Links' >
            About Us
            <i className="fas fa-code"></i>
          </NavLink>
         </li>


         <li>
         
         <NavLink exact to="/availabletrips" className='Links' >
            Available Trips
            <i className="fas fa-code"></i>
          </NavLink>
         </li>




         <li>
         
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        
        
         <NavLink exact to="/signinuser" className='Signin' >
            Sign in
            <i className="fas fa-code"></i>
          </NavLink>|
          <NavLink exact to="/Register" className="Signup" >
            Sign Up
            <i className="fas fa-code"></i>
          </NavLink>
         </li>





         



          </ul>

          
          

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          {/* <div>
          <Link to="/"> <Button type='submit'  name="submit"   >Logout</Button></Link>

          </div> */}
        </div>
        
      </nav><br></br><br></br><br></br><br></br>
      {/* <img  className='Train-wallpaper' src={trainnight} width={'100%'} /> */}
    </>
  );
}

export default Website;