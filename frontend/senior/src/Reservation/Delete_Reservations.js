import React,{useState,useEffect} from 'react';
import BootstrapNavbar from '../BootstrapNavbar';
import { Table } from "reactstrap";

import '../styletables/Style.css';
import 'bootstrap/dist/css/bootstrap.css';

import 'react-responsive-combo-box/dist/index.css'

import { Button, Modal} from 'react-bootstrap'



function Delete_Reservation() {


   //api that gets all the data from the database
   
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
   


    const getDrivers = () => {
      const API = 'http://127.0.0.1:5000/Drivers';
      fetch(API)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setDrivers(data);
        });
    }

     useEffect(() => {
       getDrivers();
    },[]) 


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

 
const[Tickets,setTickets]= useState([]);
const[Drivers,setDrivers]= useState([]);
const[Trains,setTrains]= useState([]);
const[Passengers,setPassengers]= useState([]);

  const [Reservation, setReservation] = useState([]);
  const [ViewPost, SetPostShow] = useState(false)
  const handlePostShow = () => { SetPostShow(true) }
  const hanldePostClose = () => { SetPostShow(false) }
 

 
  
 
  
  
 
          return (
            
            
            <div>
               <BootstrapNavbar/>

                        <Table className='TableDesign' border="1" cellpadding="10" cellspacing="0" width="100%" >
                         
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

                                  <div className='Buttons'>
                                  <td>
                                    
                                    
                                    
                                        <form className='Edit-Button' method="post" action={`http://127.0.0.1:5000/Reservation_delete/${reservation.res_id}`}> 
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
export default Delete_Reservation;
