import React,{useState,useEffect} from 'react';
import { Button} from 'react-bootstrap'
import { Table } from "reactstrap";
import BootstrapNavbar from '../BootstrapNavbar';
import '../styletables/Style.css';
function Delete_Trains(){
    
    const getTrains = () => {
        const API = 'http://127.0.0.1:5000/Trains';
        fetch(API)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setTrains(data);
          });
      }
  
  
  
  
  
  
  
  
  
       useEffect(() => {
         getTrains();
      },[]) 
     
   // array that holds all the data take from the database
  
   
  
    const [Trains, setTrains] = useState([]);
    return(
        <div>
    <BootstrapNavbar/>

    <Table className='TableDesign' border="1" cellpadding="10" cellspacing="0" >
                         
                         <thead >
                             <tr>
                               <th>Train id</th>
                                 <th>Destination </th>
                                 <th>Speed</th>
                                 <th>Motor Power</th>
                                 <th>Weight</th>
                                 <th>Passengers</th>
                                 <th>Number</th>
                                 <th>Actions</th>
                                 
                             </tr>
                         </thead>
                         <tbody >
                           
                         {!Trains  || Trains.length <= 0 ? (
                             <tr>
                             <td colSpan="6" align="center">
                               <b>No Trains yet.</b>
                             </td>
                           </tr>):(
                    
                    Trains.map((train =>
                         
                             <tr>

                               <td>{train.train_id}</td>
                               <td>{train.train_destination}</td>
                               <td>{train.train_speed}</td>
                               <td>{train.train_weight}</td>
                               <td>{train.train_motorpower}</td>
                               <td>{train.train_passengers}</td>
                               <td>{train.train_number}</td>

                               <div className='Buttons'>
                               <td>
                                 
                               <br></br>
                                 
                                     <form className='Delete-Button' method="post" action={`http://127.0.0.1:5000/Remove_Trains/${train.train_id}`}> 
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
     
export default Delete_Trains;