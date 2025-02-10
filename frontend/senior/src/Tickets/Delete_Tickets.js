import React,{useState,useEffect} from 'react';
import { Button} from 'react-bootstrap'
import { Table } from "reactstrap";
import '../styletables/Style.css';
import BootstrapNavbar from '../BootstrapNavbar';
function Delete_Tickets(){
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
    return(
        <div>
    
    <BootstrapNavbar/>
    <Table className='TableDesign' border="1" cellpadding="10" cellspacing="0" >
                         
                         <thead >
                             <tr>
                               <th>Ticket id</th>
                                 <th>Ticket Date</th>
                                 <th>From Station</th>
                                 <th>To Station</th>
                                 <th>Ticket Time</th>
                                 <th>Actions</th>
                                 
                             </tr>
                         </thead>
                         <tbody >
                           
                         {!Tickets  || Tickets.length <= 0 ? (
                             <tr>
                             <td colSpan="6" align="center">
                               <b>No Tickets yet.</b>
                             </td>
                           </tr>):(
                    
                    Tickets.map((ticket =>
                         
                             <tr>

                               <td>{ticket.tick_id}</td>
                               <td>{ticket.tick_date}</td>
                               <td>{ticket.from_station}</td>
                               <td>{ticket.to_station}</td>
                               <td>{ticket.tick_time}</td>

                               <div className='Buttons'>
                               <td>
                                 
                               <br></br>
                              
                                     <form className='Delete-Button' method="post" action={`http://127.0.0.1:5000/Remove_Tickets/${ticket.tick_id}`}> 
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
export default Delete_Tickets;