import React,{useState,useEffect} from 'react';
import BootstrapNavbar from '../BootstrapNavbar';
import { Table } from "reactstrap";

import '../styletables/Style.css';
import 'bootstrap/dist/css/bootstrap.css';

import 'react-responsive-combo-box/dist/index.css'






     function Reservation(){


      const getReservation = () => {
        const API = 'http://127.0.0.1:5000/Reservation';
        fetch(API)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setReservation(data);
          });
      }
  
       useEffect(() => {
         getReservation();
      },[]) 
    
        const [Reservation, setReservation] = useState([]);
        const [Search, setSearch] = useState('');
      
        
    
    
        return (
             
              
          <div>
           
             <BootstrapNavbar/>
             <br></br><br></br>
    
         Search <input 
                  type="search" 
                  name="search" 
                  placeholder="Search for a Reservation "
                  onChange={(event)=>{setSearch(event.target.value)}} />
    
    
    <div>
      <Table  className='TableDesign' border="1" cellpadding="10" cellspacing="0" width="100"  >
          <thead >
              <tr>
                    <th>Reservation id</th>
                    <th>Train Number</th>
                    <th>Passenger id</th>
                    <th>Passenger  First Name</th>
                    <th>Passenger  Last Name</th>                  
                    <th>Ticket id</th>
                    <th>Driver First Name</th>
                    <th>Driver Last Name</th>
                    <th>Reservation Date</th>
                    <th>Reservation Time</th>
                    <th>Actions</th>
              </tr>
              </thead>
              <tbody >
                    
                      
    {Reservation.filter((reservation) => {
    
    if(Search == ""){
    return (
              <tbody >
              {!Reservation  || Reservation.length <= 0 ? (
                  <tr>
                  <td colSpan="6" align="center">
                    <b>No Reservations yet.</b>
                  </td>
                </tr>):(
         
         Reservation.map((reservation =>
                  <tr>
                    <td>{reservation.res_id}</td>
                    <td>{reservation.train_number}</td>
                    <td>{reservation.p_id}</td>
                    <td>{reservation.p_fname}</td>
                    <td>{reservation.p_lname}</td>
                    <td>{reservation.tick_id}</td>
                    <td>{reservation.d_fname}</td>
                    <td>{reservation.d_lname}</td>
                    <td>{reservation.res_date}</td>
                    <td>{reservation.res_time}</td>
                  </tr>
              
              ))
    )}
              </tbody>
    
    
    
    
    )

         }else if (reservation.p_fname.toLowerCase().includes(Search.toLowerCase())) {
      return reservation;
      
      }else if (reservation.res_date == Search) {
    return reservation;
  }else if (reservation.train_number == Search) {
    return reservation;
    
    }else if (reservation.tick_id == Search) {
      return reservation;
      
      }else if (reservation.res_id == Search) {
        return reservation;
        
        }
    else if (reservation.train_id == Search) {
    return reservation;
    }else if(reservation.train_id !== Search) {
    return ;
    }}).map((reservation) =>{
    return(
    
         <tr>
                   
                    <td>{reservation.res_id}</td>
                    <td>{reservation.train_number}</td>
                    <td>{reservation.p_id}</td>
                    <td>{reservation.p_fname}</td>
                    <td>{reservation.p_lname}</td>
                    <td>{reservation.tick_id}</td>
                    <td>{reservation.d_fname}</td>
                    <td>{reservation.d_lname}</td>
                    <td>{reservation.res_date}</td>
                    <td>{reservation.res_time}</td>
             
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
     
export default Reservation;
