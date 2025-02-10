
import React from 'react';



import './Logincss.css';
import profile from './a.png';
import pass from './pass.png';




function Signin() {




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
           <h1>Admin Login Page</h1>
           <div>
           <form method="post" action={'http://localhost:5000/admins'}>
             <input className='input' type="text" placeholder="Enter your username"  name="user_name"/>
          
             <img src={pass} alt="pass" className="email"/>
             <input className='input' type="password" placeholder="Enter your password"  name="password"/>
          
        
          <button className='button'>Login</button>

          
          </form>
          </div>
          
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default Signin;