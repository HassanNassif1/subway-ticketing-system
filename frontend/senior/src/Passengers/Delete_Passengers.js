import React,{useState,useEffect} from 'react';
import { Button} from 'react-bootstrap'
import { Table } from "reactstrap";
import '../styletables/Style.css';
import BootstrapNavbar from '../BootstrapNavbar';
function Delete_Passengers(){
    const getPassengers = () => {
        const API = 'http://127.0.0.1:5000/Passengers';
        fetch(API)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setPassengers(data);
          });
      }
  
       useEffect(() => {
         getPassengers();
         
      },[]) 
      const [Passengers, setPassengers] = useState([]);
    return(
        <div>
    
    <BootstrapNavbar/>
                 <Table  className='TableDesign' border="1" cellpadding="10" cellspacing="0" width="100" >
                  
                     <thead >
                         <tr>
                           <th>Passenger id</th>
                             <th>First Name</th>
                             <th>Last Name</th>
                             <th>Destination</th>
                             <th>Nationality</th>
                             <th>Actions</th>
                             
                         </tr>
                     </thead>
                     <tbody >
                     {!Passengers  || Passengers.length <= 0 ? (
                         <tr>
                         <td colSpan="6" align="center">
                           <b>No Passengers yet.</b>
                         </td>
                       </tr>):(
                
                Passengers.map((passenger =>
                       
                 
                     
                         <tr>

                           <td>{passenger.p_id}</td>
                           <td>{passenger.p_fname}</td>
                           <td>{passenger.p_lname}</td>
                           <td>{passenger.p_destination}</td>
                           <td>{passenger.p_nationality}</td>

                           <div className='row'>
                           <td>
                             
            
                           <br></br>
                        
                                 <form className='Delete-Button' method="post" action={`http://127.0.0.1:5000/Remove_Passengers/${passenger.p_id}`}> 
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
     
export default Delete_Passengers;