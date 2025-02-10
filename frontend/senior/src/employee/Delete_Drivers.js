import React,{useState,useEffect} from 'react';
import { Table,Button} from 'react-bootstrap'
import BootstrapNavbar from '../BootstrapNavbar';

import '../styletables/Style.css';
function Delete_Drivers(){
    const getDrivers = () => {
        const API = 'http://127.0.0.1:5000/Drivers';
        fetch(API)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setDrivers(data);
          });
      }
  
  
  
  
  
  
  
  
  
       useEffect(() => {
         getDrivers();
      },[]) 
      const [Drivers, setDrivers] = useState([]);
    return(
        <div>
    
    <BootstrapNavbar/>
        <Table className='TableDesign' border="1" cellpadding="10" cellspacing="0" >
                         
                         <thead >
                             <tr>
                                 <th>Employee id</th>
                                 <th>First Name</th>
                                 <th>Last Name</th>
                                
                                 <th>Birth of Date</th>
                                 <th>Nationality</th>
                                 <th>Employee Type Desc</th>
                                 <th>Salary</th>
                                 
                             </tr>
                         </thead>
                         <tbody >
                         {!Drivers  || Drivers.length <= 0 ? (
                             <tr>
                             <td colSpan="6" align="center">
                               <b>No Drivers yet.</b>
                             </td>
                           </tr>):(
                    
                    Drivers.map((driver =>
                        
                             <tr>
                             
                               <td>{driver.emp_id}</td>
                               <td>{driver.emp_fname}</td>
                               <td>{driver.emp_lname}</td>
                               <td>{driver.emp_birthofdate}</td>
                               <td>{driver.emp_nationality}</td>
                               <td>{driver.emp_nationality}</td>
                               <td>{driver.emp_salary}</td>
                               

                               <div className='Buttons'>
                               <td>
                                
                                 
                                 <br></br>
                                     <form className='Delete-Button' method="post" action={`http://127.0.0.1:5000/Remove_Drivers/${driver.emp_id}`}> 
                                     <Button size='sm' variant='danger' type="submit" name="submit" >Delete</Button>
                                    
                                  
                                     
                                     </form>
                                    
                                 </td>
                                 </div>

                             </tr>
                               ))
                               )}
                           
  
                         </tbody>
                        
                         
                     </Table>
</div>
                 );
                 }
     
export default Delete_Drivers;