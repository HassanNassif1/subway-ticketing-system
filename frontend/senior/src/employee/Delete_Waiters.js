import React,{useState,useEffect} from 'react';
import { Table,Button} from 'react-bootstrap'
import '../styletables/Style.css';
import BootstrapNavbar from '../BootstrapNavbar';

function Delete_Waiters(){
    const getWaiters = () => {
        const API = 'http://127.0.0.1:5000/Waiter';
        fetch(API)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setWaiter(data);
          });
      }
  
  
  
  
  
  
  
  
  
       useEffect(() => {
         getWaiters();
      },[]) 
      const [Waiters, setWaiter] = useState([]);
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
                         {!Waiters  || Waiters.length <= 0 ? (
                             <tr>
                             <td colSpan="6" align="center">
                               <b>No Waiters yet.</b>
                             </td>
                           </tr>):(
                    
                    Waiters.map((waiter =>
                        
                             <tr>
                             
                               <td>{waiter.emp_id}</td>
                               <td>{waiter.emp_fname}</td>
                               <td>{waiter.emp_lname}</td>
                               <td>{waiter.emp_birthofdate}</td>
                               <td>{waiter.emp_nationality}</td>
                               <td>{waiter.emp_salary}</td>
                               

                               <div className='Buttons'>
                               <td>
                                
                                 
                                 <br></br>
                                     <form className='Delete-Button' method="post" action={`http://127.0.0.1:5000/Remove_Waiters/${waiter.emp_id}`}> 
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
     
export default Delete_Waiters;