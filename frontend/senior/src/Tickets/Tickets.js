import React,{useState,useEffect} from 'react';
import BootstrapNavbar from '../BootstrapNavbar';
import { Table } from "reactstrap";


import '../styletables/Style.css';
import 'bootstrap/dist/css/bootstrap.css';

import 'react-responsive-combo-box/dist/index.css'
import ComboBox from 'react-responsive-combo-box'
import { Button, Modal } from 'react-bootstrap'





function Tickets(){

   
  const getTickets = () => {
    const API = 'http://127.0.0.1:5000/Tickets';
    fetch(API)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setTickets(data);
      });
  }

     useEffect(() => {
       getTickets();
       
    },[]) 

    const [Tickets, setTickets] = useState([]);
    const [Search, setSearch] = useState('');
  
    


    return (
         
          
      <div>
       
         <BootstrapNavbar/>
         <br></br><br></br>

     Search <input 
              type="search" 
              name="search" 
              placeholder="Search for a Ticket "
              onChange={(event)=>{setSearch(event.target.value)}} />


<div>
  <Table  className='TableDesign' border="1" cellpadding="10" cellspacing="0" width="100"  >
      <thead >
          <tr>
              <th>Ticket id</th>
              <th>Date</th>
              <th>From Station</th>
              <th>To Station</th>
              <th>Time</th>
          </tr>
          </thead>
          <tbody >
                
                  
{Tickets.filter((ticket) => {

if(Search == ""){
return (
          <tbody >
          {!Tickets  || Tickets.length <= 0 ? (
              <tr>
              <td colSpan="6" align="center">
                <b>No Tickets yet.</b>
              </td>
            </tr>):(
     
     Tickets.map((emp =>
              <tr >
                                  <td>{ticket.tick_id}</td>
                                  <td>{ticket.tick_date}</td>
                                  <td>{ticket.from_station}</td>
                                  <td>{ticket.to_station}</td>
                                  <td>{ticket.tick_time}</td>
              </tr>
          
          ))
)}
          </tbody>




)
}else if (ticket.tick_date == Search) {
return ticket;

}
else if (ticket.tick_id == Search) {
return ticket;
}else if(ticket.tick_id !== Search) {
return ;
}}).map((ticket) =>{
return(

<tr>
       <td>{ticket.tick_id}</td>
       <td>{ticket.tick_date}</td>
       <td>{ticket.from_station}</td>
       <td>{ticket.to_station}</td>
       <td>{ticket.tick_time}</td>
         
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
export default Tickets;