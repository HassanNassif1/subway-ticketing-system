


import React,{useState,useEffect} from 'react';
import BootstrapNavbar from '../BootstrapNavbar';
import { Table } from "reactstrap";

import '../styletables/Style.css';
import 'bootstrap/dist/css/bootstrap.css';
import ComboBox from 'react-responsive-combo-box'
import 'react-responsive-combo-box/dist/index.css'
import { Button, Modal} from 'react-bootstrap'

function Edit_Trips() {


   //api that gets all the data from the database
   
   const getTrips = () => {
    const API = 'http://127.0.0.1:5000/Trips';
    fetch(API)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setTrips(data);
      });
  }

   useEffect(() => {
     getTrips();
     
  },[]) 





   
 // array that holds all the data take from the database

 
  
 const [Trips, setTrips] = useState([]);
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

  const [Trains, setTrains] = useState([]);

  const [ViewPost, SetPostShow] = useState(false)
  const handlePostShow = () => { SetPostShow(true) }
  const hanldePostClose = () => { SetPostShow(false) }
  const [ViewUpdate,SetUpdateShow] = useState(false)
  const handleUpdateShow = () => { SetUpdateShow(true) }
  const handleUpdateClose = () => { SetUpdateShow(false) }
  
  const [set_Time] = useState("")
  const [ set_Date] = useState("")
  const [set_nop] = useState("")
  const[set_trainnumber] = useState("")


  const [set_pfname] = useState("")
  const [ set_plname] = useState("")
  const [set_pnationality] = useState("")
  const[set_date] = useState("")
  
  let stations = [ '72nd Street station',' 42nd Street-Bryant Park/Fifth Avenue'];
          return (
            
            
            <div>
               <BootstrapNavbar/>

                        <Table  className='TableDesign' border="1" cellpadding="10" cellspacing="0" width="100" >
                         
                            <thead >
                                <tr>
                                   <th>Trip id</th>
                                   <th> Trip Number</th>
                                   <th> Train Number</th>
                                   <th> Time </th>
                                   <th> Date </th>
                                   <th>Number Of Passengers</th>
                                   <th>From Station</th>
                                   <th>To Station</th>
                                   <th>Passenger First Name</th>
                                   <th>Passenger Last Name</th>
                                   <th>Passenger Nationality</th>
                                   <th>Passenger Birth of Date</th>
                                   <th>Avaiable?</th>
                                   <th>Actions</th>
                                    
                                </tr>
                            </thead>
                            <tbody >
                            {!Trips  || Trips.length <= 0 ? (
                                <tr>
                                <td colSpan="6" align="center">
                                  <b>No Trips yet.</b>
                                </td>
                              </tr>):(
                       
                       Trips.map((trip =>
                              
                        
                            
                                <tr>

                                  <td>{trip.trip_id}</td>
                                  <td>{trip.trip_number}</td>
                                  <td>{trip.train_number}</td>
                                  <td>{trip.trip_time}</td>
                                  <td>{trip.trip_date}</td>
                                  <td>{trip.trip_passengers}</td>
                                  <td>{trip.trip_fromstation}</td>
                                  <td>{trip.trip_tostation}</td>
                                  <td>{trip.trip_pfname}</td>
                                  <td>{trip.trip_plname}</td>
                                  <td>{trip.trip_pnationality}</td>
                                  <td>{trip.trip_pdob}</td>
                                  <td>{trip.trip_status == true? "Y":"N"}</td>
                                  

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
                        <Modal.Title>Edit Trips</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                    <form className='form-group' method="post" action={`http://localhost:5000/Edit_Trips/${trip.trip_id}`} >
          <input type="text" className='form-control' name="tripnumber"  placeholder=" Trip Number" />
          <div >
            Train Number <select className='select-list' name="trainnumber" onChange={(e) => set_trainnumber(e.target.value)} >{ Trains.map(train =><option value = {train.value}  >{train.train_number} </option>)}
              
              </select>
              </div><br></br>
                           
     <div className='form-group mt-3'>
          Time <input type="time" className='form-control'  onChange={(e) => set_Time(e.target.value)} value={trip.trip_time}  name="triptime"   />
    </div>

    <div className='form-group mt-3'>
         Date  <input type="date" className='form-control' onChange={(e) => set_Date(e.target.value)} name="tripdate"   />
    </div>

    <div className='form-group mt-3'>
         Number of Passengers <input type="number" className='form-control' onChange={(e) => set_nop(e.target.value)}  name="passengers"  />
     </div>

     <div className='form-group mt-3'>
                     From Station &nbsp;&nbsp;<ComboBox className='input-fields' options={stations}  enableAutocomplete name="fromstation" />
                 </div>
                 

                 <div className='form-group mt-3'>
                      To Station &nbsp;&nbsp;<ComboBox className='input-fields' options={stations} enableAutocomplete name="tostation" />
                 </div>



       <div className='form-group mt-3'>
         Passenger First Name <input type="text" className='form-control' onChange={(e) => set_pfname(e.target.value)}  name="pfname"  />
     </div>

     <div className='form-group mt-3'>
         Passenger Last Name <input type="text" className='form-control' onChange={(e) => set_plname(e.target.value)}  name="plname"  />
     </div>

     <div className='form-group mt-3'>
         Passenger Nationality <input type="text" className='form-control' onChange={(e) => set_pnationality(e.target.value)}  name="pnationality"  />
     </div>

     <div className='form-group mt-3'>
         Passenger Date of Birth <input type="date" className='form-control' onChange={(e) => set_date(e.target.value)}  name="pdob"  />
     </div>

                 <div className='form-group mt-3'>
                   <label>isAvailable ?</label>
                      <input type="radio" value={true} name="status" />Yes
                      <input type="radio" value={false} name="status" />No
                    
                 </div>
                            
             <Button type='submit'  name="submit" className='btn btn-success mt-4'   >Edit Trip </Button>
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
export default Edit_Trips;
