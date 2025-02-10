


import React,{useState,useEffect} from 'react';
import BootstrapNavbar from '../BootstrapNavbar';
import { Table } from "reactstrap";

import '../styletables/Style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal} from 'react-bootstrap'

function Edit_Passengers() {


   //api that gets all the data from the database
   
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



   
 // array that holds all the data take from the database

 
  
  const [Passengers, setPassengers] = useState([]);

  
 
  const [ViewModal,SetModal] = useState(false)
  const Show = () => { SetModal(true) }
  const Close = () => { SetModal(false) }
  
  const [setp_fname] = useState("")
  const [setp_lname] = useState("")
  const [setp_destination] = useState("")
  const [setp_nationality] = useState("")
  
  
   
          return (
            
            
            <div>
               <BootstrapNavbar/>

                        <Table  className='TableDesign' border="1" cellpadding="10" cellspacing="0" width="100" >
                         
                            <thead >
                                <tr>
                                  <th>Passenger id</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Destination</th>
                                    <th>Nationality</th>
                                    <th>Actions</th>
                                    
                                </tr>
                            </thead>
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
                        <Modal.Title>Edit Passenger</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                            <form className='form-group' method="post" action={`http://localhost:5000/Passengers_Update/${passenger.p_id}`} >
                                <input type="text" className='form-control' name="Fname" onChange={(e) => setp_fname(e.target.value)} placeholder=" First Name" />
                           
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control'  name="Lname" onChange={(e) => setp_lname(e.target.value)} placeholder=" Last Name" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control'  name="Destination" onChange={(e) => setp_destination(e.target.value)} placeholder=" Destination" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' name="Nationality" onChange={(e) => setp_nationality(e.target.value)} placeholder="Nationality" />
                            </div>
                            
                            <Button type='submit'  name="submit" className='btn btn-success mt-4'   >Edit </Button>
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
export default Edit_Passengers;
