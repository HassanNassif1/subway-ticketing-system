import React,{useState,useEffect} from 'react';
import Website from './Website'
import {Button,Modal} from 'react-bootstrap'
import { Table } from "reactstrap";
import "./Website.css";
import ComboBox from 'react-responsive-combo-box'
import 'react-responsive-combo-box/dist/index.css'
import { useParams } from "react-router-dom";

function Available_Trips() {


  const getAvailableTrips = () => {
    const API = 'http://127.0.0.1:5000/AvailableTrips';
    fetch(API)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setAvailable(data);
      });
  }

   useEffect(() => {
    getAvailableTrips();
     
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

 

  const [Available, setAvailable] = useState([]);

  const [Trains, setTrains] = useState([]);

  const [ViewPost, SetPostShow] = useState(false)
  const handlePostShow = () => { SetPostShow(true) }
  const hanldePostClose = () => { SetPostShow(false) }
  const [ViewUpdate,SetUpdateShow] = useState(false)
  const handleUpdateShow = () => { SetUpdateShow(true) }
  const handleUpdateClose = () => { SetUpdateShow(false) }
  
  // const [set_Time] = useState("")
  // const [ set_Date] = useState("")
  // const [set_nop] = useState("")
  // const[set_trainnumber] = useState("")


  const [set_pfname] = useState("")
  const [ set_plname] = useState("")
  const [set_pnationality] = useState("")
  const[set_date] = useState("")
  

  const { id } = useParams();


  let stations = [ '72nd Street station',' 42nd Street-Bryant Park/Fifth Avenue'];
  return (
    <div>
        <Website/>
        <div className='tripbg'>
       
        </div>
            <br></br>
        <h1 className='text' >
        An easier way to manage your trips!
We make it super easy to schedule, organize and travel with friends or family. Trips is free — and available to use no matter where you book.
        </h1>

       
<div>
  <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>



<Table  className='available' border="1" cellpadding="10" cellspacing="0" width="100" >
                  
                  <thead  className='thead' >
                      <tr>
                     
                      <th> Time </th>
                      <th> Date </th>
                      <th>From Station</th>
                      <th>To Station</th>
                     
                      <th>Action</th>
                          
                      </tr>
                  </thead>
                  <tbody >
                  {!Available || Available.length <= 0 ? (
                      <tr>
                      <td colSpan="6" align="center">
                        <b>No Available Trips yet.</b>
                      </td>
                    </tr>):(
             
            Available.map((trip =>
                    
              
                  
                      <tr>


         <td>{trip.trip_time}</td>
         <td>{trip.trip_date}</td>
        
         <td>{trip.trip_fromstation}</td>
         <td>{trip.trip_tostation}</td> 
       
        
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
                        
                    <form className='form-group' method="post" action={`http://localhost:5000/Edit_AvailableTrips/${trip.trip_id}`} >
      

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

{/* <div>



</div>


<h5 >
        
In case, the date or time of a specific trip doesn't good for ,so you can fill this form to get your perfect date and time!

</h5>


<div >

<form className='form-group' method="post"  >
          <input type="text" className='form-control' name="Fname"  placeholder=" First Name" />
                           
     <div className='form-group mt-3'>
           <input type="text" className='form-control'  name="Lname"  placeholder=" Last Name" />
    </div>

    <div className='form-group mt-3'>
          <input type="text" className='form-control'  name="Destination"  placeholder=" Destination" />
     </div>

     <div className='form-group mt-3'>
           <input type="text" className='form-control' name="Nationality"  placeholder="Nationality" />
    </div>
                            
             <Button type='submit'  name="submit" className='btn btn-success mt-4'   >Submit </Button>
</form>



</div> */}













</div>
       






        
       
        
  
  )
}

export default Available_Trips