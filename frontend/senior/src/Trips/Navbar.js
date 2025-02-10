import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {NavBar, Nav, NavItem,Item,NavDropdown} from 'react-bootstrap';
// import trainnight from './trainnight.jpg';
import "./NavBar.css";
import {Link}from "react-router-dom"

import { Button} from 'react-bootstrap'

// import './App.css';


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
        {/* <img class="logo-image" src={logo} alt="Logo" /> */}
          <NavLink exact to="/" className="nav-logo">
          Subway Reservation System
            <i className="fas fa-code"></i>
          </NavLink>
          
          <ul className={click ? "nav-menu active" : "nav-menu"}>
           

      






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

export default Navbar;