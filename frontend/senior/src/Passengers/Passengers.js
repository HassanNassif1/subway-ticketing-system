import React,{useState,useEffect} from 'react';
import BootstrapNavbar from '../BootstrapNavbar';
import { Table } from "reactstrap";

import '../styletables/Style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal} from 'react-bootstrap'




function Passengers(){


  const getPassengers = () => {
      const API = 'http://127.0.0.1:5000/Passengers';
      fetch(API)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setPassenger(data);
        });
    }

     useEffect(() => {
       getPassengers();
       
    },[]) 

    const [Passengers, setPassenger] = useState([]);
    const [Search, setSearch] = useState('');
  
    


    return (
         
          
      <div>
       
         <BootstrapNavbar/>
         <br></br><br></br>

     Search <input 
              type="search" 
              name="search" 
              placeholder="Search for a Passenger "
              onChange={(event)=>{setSearch(event.target.value)}} />


<div>
  <Table  className='TableDesign' border="1" cellpadding="10" cellspacing="0" width="100"  >
      <thead >
          <tr>
              <th>Passenger id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Destination</th>
              <th>Nationality</th>
          </tr>
          </thead>
          <tbody >
                
                  
{Passengers.filter((passenger) => {

if(Search == ""){
return (
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
              </tr>
          
          ))
)}
          </tbody>




)
}else if (passenger.p_fname.toLowerCase().includes(Search.toLowerCase())) {
return passenger;

}
else if (passenger.p_id == Search) {
return passenger;
}else if(passenger.p_id !== Search) {
return ;
}}).map((passenger) =>{
return(

<tr>
          <td>{passenger.p_id}</td>
          <td>{passenger.p_fname}</td>
          <td>{passenger.p_lname}</td>
          <td>{passenger.p_destination}</td>
          <td>{passenger.p_nationality}</td>
         
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
export default Passengers;
