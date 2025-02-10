import React,{useState,useEffect} from 'react';
import BootstrapNavbar from '../BootstrapNavbar';
import { Table } from "reactstrap";


import '../styletables/Style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal} from 'react-bootstrap'


function Trips(){


    
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
    const [Search, setSearch] = useState('');
  


    return (
         
          
      <div>
       
         <BootstrapNavbar/>
         <br></br><br></br>

     Search <input 
              type="search" 
              name="search" 
              placeholder="Search for a Trip "
              onChange={(event)=>{setSearch(event.target.value)}} />


<div>
  <Table  className='TableDesign' border="1" cellpadding="10" cellspacing="0" width="100"  >
      <thead >
          <tr>
              <th>Trip id</th>
              <th> Trip Number</th>
              <th> Train Number</th>
              <th> Time </th>
              <th> Date </th>
              <th>Number Of Passengers</th>
              <th>From Station</th>
              <th>To Station</th>
              <th>Passenger First Name</th>
              <th>Passenger Last Name</th>
              <th>Passenger Nationality</th>
              <th>Passenger Birth of Date</th>
              <th>Available?</th>
          </tr>
          </thead>
          <tbody >
                
                  
{Trips.filter((trip) => {

if(Search == ""){
return (
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
              </tr>
           
          ))
)}
          </tbody>




)
}else if (trip.trip_number == Search) {
return trip;

}
else if (trip.trip_date == Search){
  return trip;
} else if(trip.train_number == Search){

  return trip;
}
else if (trip.trip_id == Search) {
return trip;
}else if(trip.trip_id !== Search) {
return ;
}}).map((trip) =>{
return(

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
         <td>{trip.trip_status == true? "Y":" N"}</td>
         
</tr>

);
})

}   
  </tbody>     
 </Table>
 </div>    
</div>  
        
         );
         
}
export default Trips;
