import React,{useState,useEffect} from 'react';
import { Table,Button} from 'react-bootstrap'
import BootstrapNavbar from '../BootstrapNavbar';

import '../styletables/Style.css';
function Delete_Engineer(){
    const getEngineers = () => {
        const API = 'http://127.0.0.1:5000/Engineers';
        fetch(API)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setEngineers(data);
          });
      }
  
  
  
  
  
  
  
  
  
       useEffect(() => {
         getEngineers();
      },[]) 
      const [Engineers, setEngineers] = useState([]);
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
                                 <th>Salary</th>
                                 
                             </tr>
                         </thead>
                         <tbody >
                         {!Engineers  || Engineers.length <= 0 ? (
                             <tr>
                             <td colSpan="6" align="center">
                               <b>No Engineers yet.</b>
                             </td>
                           </tr>):(
                    
                    Engineers.map((engineer =>
                        
                             <tr>
                             
                               <td>{engineer.emp_id}</td>
                               <td>{engineer.emp_fname}</td>
                               <td>{engineer.emp_lname}</td>
                               <td>{engineer.emp_birthofdate}</td>
                               <td>{engineer.emp_nationality}</td>
                               <td>{engineer.emp_salary}</td>
                               

                               <div className='Buttons'>
                               <td>
                                
                                 
                                 <br></br>
                                     <form className='Delete-Button' method="post" action={`http://127.0.0.1:5000/Remove_Engineers/${engineer.emp_id}`}> 
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
     
export default Delete_Engineer;