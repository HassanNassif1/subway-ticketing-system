
import React from 'react';



import './Logincss.css';
import profile from './a.png';
import pass from './pass.png';




function Signin_driver() {




  return (
    
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Driver Login Page</h1>
           <div>
           <form method="post" action={'http://localhost:5000/driverlogin'}>
             <input className='input' type="text" placeholder="Enter your username"  name="driverusername"/>
          
             <img src={pass} alt="pass" className="email"/>
             <input className='input' type="password" placeholder="Enter your password"  name="driverpassword"/>
          
        
          <button className='button'>Login</button>

          
          </form>
          </div>
          
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default Signin_driver;