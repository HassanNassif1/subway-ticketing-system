
import React from 'react';



import './Logincss.css';
import profile from './a.png';
import pass from './pass.png';




function Signin_emp() {




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
           <h1>Employee Login Page</h1>
           <div>
           <form method="post" action={'http://localhost:5000/employeeslogin'}>
             <input className='input' type="text" placeholder="Enter your username"  name="empusername"/>
          
             <img src={pass} alt="pass" className="email"/>
             <input className='input' type="password" placeholder="Enter your password"  name="emppassword"/>
          
        
          <button className='button'>Login</button>

          
          </form>
          </div>
          
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default Signin_emp;