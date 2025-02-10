import React from 'react'
import {Button} from 'react-bootstrap';
import "./Website.css";
import user from './subway.jpg';

function Signin_user() {
  return (
    <div className='border' >
             <br></br><br></br><br></br>
             <img  src={user}  className="user"  />
        <form className='userform' method="post" align="center" >
            <div align="center">
       
        
        </div>
            <input className='inputfield' placeholder='Enter your Username' name="username" type="text"/><br></br><br></br>


            <input className='inputfield' placeholder ='Enter your Password' name="password" type="text"/><br></br><br></br>

            <Button className='Signin' variant='dark' > Signin </Button> <br></br>
            <a href="/Register">Register for an account</a>

        </form>
        
        
        
        
         </div>
  )
}

export default Signin_user