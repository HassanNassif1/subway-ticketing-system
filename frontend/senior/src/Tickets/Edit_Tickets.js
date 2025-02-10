


import React,{useState,useEffect} from 'react';
import BootstrapNavbar from '../BootstrapNavbar';
import { Table } from "reactstrap";
import 'react-responsive-combo-box/dist/index.css'
import ComboBox from 'react-responsive-combo-box'
import '../styletables/Style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal} from 'react-bootstrap'

function Edit_Tickets() {


   //api that gets all the data from the database
   
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



   
 // array that holds all the data take from the database

 
  
  const [Tickets, setTickets] = useState([]);

  const [ViewPost, SetPostShow] = useState(false)
  const handlePostShow = () => { SetPostShow(true) }
  const hanldePostClose = () => { SetPostShow(false) }
  const [ViewUpdate,SetUpdateShow] = useState(false)
  const handleUpdateShow = () => { SetUpdateShow(true) }
  const handleUpdateClose = () => { SetUpdateShow(false) }
  
  const [setTick_Date] = useState("")
  const [setFrom_Station] = useState("")
  const [setTo_Station] = useState("")
  const [setTick_Time] = useState("")
 
  let stations = [ '72nd Street station',' 42nd Street-Bryant Park/Fifth Avenue'];
  
   
          return (
            
            
            <div>
               <BootstrapNavbar/>

                        <Table  className='TableDesign' border="1" cellpadding="10" cellspacing="0" width="100" >
                         
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

                                  <div className='row'>
                                  <td>
                                    
                                  <div>
                <div className='Buttons' >
                    <Button className='Edit' variant='warning' onClick={() => { handleUpdateShow() }}>
                       Edit
                    </Button>|
                </div>
                
            <div className='model-box-view'>
                <Modal
                    show={ViewUpdate}
                    onHide={handleUpdateClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Ticket</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                    <form className='form-group' method="post" action={`http://localhost:5000/Tickets_Update/${ticket.tick_id}`} >
                    <input type="date" className='form-control' name="TickDate" onChange={(e) => setTick_Date(e.target.value)}  placeholder=" Ticket Date" />
                           
                           <div className='form-group mt-3'>
                               From Station &nbsp;&nbsp;<ComboBox className='input-fields' onChange={(e) => setFrom_Station(e.target.value)} options={stations} enableAutocomplete name="FromStation" />
                           </div>
          
                           <div className='form-group mt-3'>
                                To Station &nbsp;&nbsp;<ComboBox className='input-fields' onChange={(e) => setTo_Station(e.target.value)}options={stations} enableAutocomplete name="ToStation" />
                           </div>
          
                          <div className='form-group mt-3'>
                                         
                      <input type="time" className='form-control' name="Ticktime" onChange={(e) => setTick_Time(e.target.value)}  placeholder="Ticket Time" />
          
                      <Button type='submit'  name="submit" className='btn btn-success mt-4' >Edit Ticket</Button>
                      </div>
                            
                            
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleUpdateClose}>Close</Button>
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
export default Edit_Tickets;
