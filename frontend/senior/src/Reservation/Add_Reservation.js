import React,{useEffect,useState} from "react";
import { Button } from 'react-bootstrap'

import BootstrapNavbar from '../BootstrapNavbar';
function Add_Reservation(){
   
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

    return(
        <div align ="center">
            <BootstrapNavbar/>
            <form className='form-group' method="post" action={'http://localhost:5000/Reservation_Insert'} >
                                
                           
                                <div >
                                Train Number <select className='select-list' name="trainnumber" >{ Trains.map(train =><option value = {train.value}  >{train.train_number} </option>)}
              
                                    </select>
                               </div><br></br>
   
                               <div >
                               Passenger id<select className='select-list' name="pid" >{ Passengers.map(passenger =><option value = {passenger.value}  >{passenger.p_id} </option>)}
              
                                    </select>
                               </div><br></br>
                               <div >
                               Passenger First Name<select className='select-list' name="pfname" >{ Passengers.map(passenger =><option value = {passenger.value}  >{passenger.p_fname}  </option>)}
              
                                    </select>
                               </div><br></br>
   
                               <div >
                               Passenger Last Name<select className='select-list'  name="plname" >{ Passengers.map(passenger =><option value = {passenger.value} >{passenger.p_lname}  </option>)}
              
                                    </select>
                               </div><br></br>
   
                               <div>
                               Tickets id <select className='select-list' name="tickid">{ Tickets.map(ticket =><option value = {ticket.value} >{ticket.tick_id}</option>)}
                                    
                                    </select>
                              </div><br></br>
   
                          
                               <div >
                              Driver First Name<select className='select-list' name="dfname" >{ Drivers.map(driver =><option value = {driver.value} >{driver.emp_fname}  </option>)}
              
                                    </select>
                               </div><br></br>
   
                               <div >
                              Driver Last Name<select className='select-list' name="dlname" >{ Drivers.map(driver =><option value = {driver.value} >{driver.emp_lname}  </option>)}
              
                                    </select>
                               </div><br></br>
   
                               <div className='form-group mt-3'>
                                   <input type="time" className='form-control' name="restime" placeholder="restime" />
                               </div>
                               <div className='form-group mt-3'>
                               <input type="date" className='form-control' name="resdate"  placeholder="resdate" />
                               </div>
                               
                               <Button type='submit'  name="submit" className='btn btn-success mt-4' >Add Reservation</Button>
                           </form>
        </div>
    )
}
export default Add_Reservation;
