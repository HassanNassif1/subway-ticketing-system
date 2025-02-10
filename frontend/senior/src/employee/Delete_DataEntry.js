import React,{useState,useEffect} from 'react';
import { Table,Button} from 'react-bootstrap'
import '../styletables/Style.css';
import BootstrapNavbar from '../BootstrapNavbar';
function Delete_DataEntry(){
    const getOperators = () => {
        const API = 'http://127.0.0.1:5000/DataEntryOperator';
        fetch(API)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setOperators(data);
          });
      }
  
  
  
  
  
  
  
  
  
       useEffect(() => {
         getOperators();
      },[]) 
      const [Operators, setOperators] = useState([]);
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
                         {!Operators  || Operators.length <= 0 ? (
                             <tr>
                             <td colSpan="6" align="center">
                               <b>No Operators yet.</b>
                             </td>
                           </tr>):(
                    
                    Operators.map((op =>
                        
                             <tr>
                             
                               <td>{op.emp_id}</td>
                               <td>{op.emp_fname}</td>
                               <td>{op.emp_lname}</td>
                               <td>{op.emp_birthofdate}</td>
                               <td>{op.emp_nationality}</td>
                               <td>{op.emp_salary}</td>
                               

                               <div className='Buttons'>
                               <td>
                                
                                 
                                 <br></br>
                                     <form className='Delete-Button' method="post" action={`http://127.0.0.1:5000/Remove_Operator/${op.emp_id}`}> 
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
     
export default Delete_DataEntry;