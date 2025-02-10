import React,{useState,useEffect} from 'react';
import { Table,Button} from 'react-bootstrap'
import '../styletables/Style.css';
import BootstrapNavbar from '../BootstrapNavbar';
function Delete_Trips(){
   //api that gets all the data from the database
   
   const getTrips = () => {
    const API = 'http://127.0.0.1:5000/Trips';
    fetch(API)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setTrips(data);
      });
  }

   useEffect(() => {
     getTrips();
     
  },[]) 

      const [Trips, setTrips] = useState([]);
    return(
        <div>
    <BootstrapNavbar/>

    <Table className='TableDesign' border="1" cellpadding="10" cellspacing="0" >
                         
                         <thead >
                             <tr>
                                  <th>Trip id</th>
                                   <th> Trip Number</th>
                                   <th> Train Number</th>
                                   <th> Time </th>
                                   <th> Date </th>
                                   <th>Number Of Passengers</th>
                                   <th>From Station</th>
                                   <th>Passenger First Name</th>
                                   <th>Passenger Last Name</th>
                                   <th>Passenger Nationality</th>
                                   <th>Passenger Birth of Date</th>
                                   <th>To Station</th>
                                   <th>Available?</th>
                                   <th>Actions</th>
                                 
                             </tr>
                         </thead>
                         <tbody >
                         {!Trips  || Trips.length <= 0 ? (
                             <tr>
                             <td colSpan="6" align="center">
                               <b>No Trips yet.</b>
                             </td>
                           </tr>):(
                    
                    Trips.map((trip =>
                        
                             <tr>
                             
                                  <td>{trip.trip_id}</td>
                                  <td>{trip.trip_number}</td>
                                  <td>{trip.train_number}</td>
                                  <td>{trip.trip_time}</td>
                                  <td>{trip.trip_date}</td>
                                  <td>{trip.trip_passengers}</td>
                                  <td>{trip.trip_fromstation}</td>
                                  <td>{trip.trip_tostation}</td>
                                  <td>{trip.trip_pfname}</td>
                                  <td>{trip.trip_plname}</td>
                                  <td>{trip.trip_pnationality}</td>
                                  <td>{trip.trip_pdob}</td>
                                  <td>{trip.trip_status == true? "Y":"N"}</td>


                               <div className='Buttons'>
                               <td>
                                
                                 
                                 <br></br>
                                     <form className='Delete-Button' method="post" action={`http://127.0.0.1:5000/Delete_Trips/${trip.trip_id}`}> 
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
     
export default Delete_Trips;