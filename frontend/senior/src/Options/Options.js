import React from 'react';
import {Link}from "react-router-dom"
import { Button } from 'react-bootstrap'
import './Options.css'
function Options(){



    return(
        <div align="center">
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<Link to="/Signinadmin"> <Button type='submit'  name="submit" className='admin'  >Admin</Button></Link>
<Link to="/employees"> <Button type='submit'  name="submit" className='employee'  >Employee(Data Entry Operator)</Button></Link>
<Link to="/driverlogin"> <Button type='submit'  name="submit" className='employee'  >Employee(Driver)</Button></Link>
        </div>
    )
}

export default Options;