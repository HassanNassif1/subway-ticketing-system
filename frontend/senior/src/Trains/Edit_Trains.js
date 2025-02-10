


import React,{useState,useEffect} from 'react';
import BootstrapNavbar from '../BootstrapNavbar';
import { Table } from "reactstrap";

import '../styletables/Style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal} from 'react-bootstrap'

function Edit_Trains() {


   //api that gets all the data from the database
   
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

 
  
  const [Trains, setTrains] = useState([]);

  const [ViewPost, SetPostShow] = useState(false)
  const handlePostShow = () => { SetPostShow(true) }
  const hanldePostClose = () => { SetPostShow(false) }
  const [ViewUpdate,SetUpdateShow] = useState(false)
  const handleUpdateShow = () => { SetUpdateShow(true) }
  const handleUpdateClose = () => { SetUpdateShow(false) }
  
  const [sett_destination] = useState("")
  const [ sett_speed] = useState("")
  const [sett_weight] = useState("")
  const [sett_motorpower] = useState("")
  const [sett_passengers] = useState("")
  const [sett_number] = useState("")
  
   
          return (
            
            
            <div>
               <BootstrapNavbar/>

                        <Table  className='TableDesign' border="1" cellpadding="10" cellspacing="0" width="100" >
                         
                            <thead >
                                <tr>
                                <th>Train id</th>
                                 <th>Destination </th>
                                 <th>Speed</th>
                                 <th>Motor Power</th>
                                 <th>Weight</th>
                                 <th>Passengers</th>
                                 <th>Number</th>
                                 <th>Actions</th>
                                    
                                </tr>
                            </thead>
                            <tbody >
                            {!Trains  || Trains.length <= 0 ? (
                                <tr>
                                <td colSpan="6" align="center">
                                  <b>No Trains yet.</b>
                                </td>
                              </tr>):(
                       
                       Trains.map((train =>
                              
                        
                            
                                <tr>

                               <td>{train.train_id}</td>
                               <td>{train.train_destination}</td>
                               <td>{train.train_speed}</td>
                               <td>{train.train_weight}</td>
                               <td>{train.train_motorpower}</td>
                               <td>{train.train_passengers}</td>
                               <td>{train.train_number}</td>

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
                        <Modal.Title>Edit Trains</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                    <form className='form-group' method="post" action={`http://localhost:5000/Trains_Update/${train.train_id}`} >
       <input type="text" className='form-control' name="Tr_Destination" placeholder="Destination" />
                           
                            
         <div className='form-group mt-3'>
                 <input type="text" className='form-control' name="Tr_Speed"  onChange={(e) => sett_destination(e.target.value)} placeholder="Speed" />
          </div>

           <div className='form-group mt-3'>
                  <input type="text" className='form-control' name="Tr_Weight"   onChange={(e) => sett_weight(e.target.value)} placeholder="Weight" />
           </div>

            <div className='form-group mt-3'>
                    <input type="text" className='form-control' name="Tr_MotorPower"  onChange={(e) => sett_motorpower(e.target.value)} placeholder="Motor Power" />
            </div>

            <div className='form-group mt-3'>
                     <input type="number" className='form-control' name="Tr_Passengers"   onChange={(e) => sett_passengers(e.target.value)} placeholder="Passengers" />
             </div>

             <div className='form-group mt-3'>
                      <input type="number" className='form-control' name="Tr_Number"   onChange={(e) => sett_number(e.target.value)}placeholder="Number" />
             </div>
                          
                            
                 <Button type='submit'  name="submit" className='btn btn-success mt-4' >Edit Train</Button>
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
export default Edit_Trains;
