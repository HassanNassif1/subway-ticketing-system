import React,{useState,useEffect} from 'react';
import BootstrapNavbar from '../BootstrapNavbar';
import { Table } from "reactstrap";


import 'bootstrap/dist/css/bootstrap.css';
import '../styletables/Style.css';
import 'react-responsive-combo-box/dist/index.css'

import { Button, Modal} from 'react-bootstrap'


function Edit_Reservation() {


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



const[settrainnumber] = useState("");
const[setPassengerid] = useState("");
const[setPassengerFirstName] = useState("");
const[setPassengerLastName] = useState("");
const[setTicketid] = useState("");

const[setDriverFirstName] = useState("");
const[setDriverLastName] = useState("");
const[setresdate] = useState("");
const[setrestime] = useState("");



  const [Reservation, setReservation] = useState([]);

  const [ViewModal,SetModal] = useState(false)
  const Show = () => { SetModal(true) }
  const Close = () => { SetModal(false) }

 
  
 
  
  
 
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

                                  <div className='row'>
                                  <td>
                                    
                                  <div>
                <div className='Buttons' >
                    <Button className='Edit' variant='warning' onClick={() => { Show() }}>
                       Edit 
                    </Button>
                </div>
                
            <div className='model-box-view'>
                <Modal
                    show={ViewModal}
                    onHide={Close}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Reservation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                    <form className='form-group' method="post" action={`http://localhost:5000/Reservations_Update/${reservation.res_id}`} >
                                
                           
                                <div >
                                Train Number <select className='select-list' name="trainnumber" onChange={(e) => settrainnumber(e.target.value)} >{ Trains.map(train =><option value = {train.value}  >{train.train_number} </option>)}
              
                                    </select>
                               </div><br></br>
   
                               <div >
                               Passenger id<select className='select-list' name="pid" onChange={(e) => setPassengerid(e.target.value)} >{ Passengers.map(passenger =><option value = {passenger.value}  >{passenger.p_id} </option>)}
              
                                    </select>
                               </div><br></br>
                               <div >
                               Passenger First Name<select className='select-list' name="pfname" onChange={(e) => setPassengerFirstName(e.target.value)} >{ Passengers.map(passenger =><option value = {passenger.value}  >{passenger.p_fname}  </option>)}
              
                                    </select>
                               </div><br></br>
   
                               <div >
                               Passenger Last Name<select className='select-list' name="plname" onChange={(e) => setPassengerLastName(e.target.value)} >{ Passengers.map(passenger =><option value = {passenger.value}  >{passenger.p_lname}  </option>)}
              
                                    </select>
                               </div><br></br>
   
                               <div>
                               Tickets id <select className='select-list' name="tickid" onChange={(e) => setTicketid(e.target.value)}>{ Tickets.map(ticket =><option value = {ticket.value} >{ticket.tick_id}</option>)}
                                    
                                    </select>
                              </div><br></br>
   
                          
                               <div >
                              Driver First Name<select className='select-list' name="dfname" onChange={(e) => setDriverFirstName(e.target.value)}>{ Drivers.map(driver =><option value = {driver.value} >{driver.emp_fname}  </option>)}
              
                                    </select>
                               </div><br></br>
   
                               <div >
                              Driver Last Name<select className='select-list' name="dlname" onChange={(e) => setDriverLastName(e.target.value)} >{ Drivers.map(driver =><option value = {driver.value} >{driver.emp_lname}  </option>)}
              
                                    </select>
                               </div><br></br>
   
                               <div className='form-group mt-3'>
                                   <input type="time" className='form-control' name="restime" placeholder="restime" onChange={(e) => setrestime(e.target.value)} />
                               </div>
                               <div className='form-group mt-3'>
                               <input type="date" className='form-control' name="resdate"  placeholder="resdate" onChange={(e) => setresdate(e.target.value)} />
                               </div>
                               
                               <Button type='submit'  name="submit" className='btn btn-success mt-4' >Edit Reservation</Button>
                           </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={Close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            </div>

                                       
                                        
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
export default Edit_Reservation;
