import React,{useEffect,useState} from "react";
import { Button } from 'react-bootstrap'
import BootstrapNavbar from '../BootstrapNavbar';
import 'react-responsive-combo-box/dist/index.css'
import ComboBox from 'react-responsive-combo-box'
import axios from 'axios';
import Trips from "./Trips";
import { Prev } from "react-bootstrap/esm/PageItem";
function Add_Trips(){

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

  // const API_URL = "http://localhost:5000/Add_Trips"

  // const addTrips =()=>{
  //   const data = {

  //   }
  //   axios.post(API_URL,data).then((e)=>{
  //     console.log(e.data);
  //   }).catch((res)=>{
  //     console.log(res.error);
  //   })
  // }
  // const onChange =(prevState)=>{
  //   setData1(...prevState, e.name: e.target.va)
  // }






   useEffect(() => {
     getTrains();
  },[]) 


 
 
// array that holds all the data take from the database



const [Trains, setTrains] = useState([]);


let stations = [ '72nd Street station',' 42nd Street-Bryant Park/Fifth Avenue'];   

return(
        <div align ="center">
            <BootstrapNavbar/>
 <form className='form-group' method="post" action={`http://localhost:5000/Add_Trips`} >
          <input type="text" className='form-control' name="tripnumber"  placeholder=" Trip Number" />
          <div >
            Train Number <select className='select-list' name="trainnumber" >{ Trains.map(train =><option value = {train.value}  >{train.train_number} </option>)}
              
              </select>
              </div><br></br>
                           
     <div className='form-group mt-3'>
          Time <input type="time" className='form-control'  name="triptime"   />
    </div>

    <div className='form-group mt-3'>
         Date  <input type="date" className='form-control'  name="tripdate"   />
    </div>

    <div className='form-group mt-3'>
         Number of Passengers <input type="number" className='form-control'  name="passengers"  />
     </div>

     <div className='form-group mt-3'>
                     From Station &nbsp;&nbsp;<ComboBox className='input-fields' options={stations} enableAutocomplete name="fromstation" />
                 </div>

                 <div className='form-group mt-3'>
                      To Station &nbsp;&nbsp;<ComboBox className='input-fields' options={stations} enableAutocomplete name="tostation" />
                 </div>

                 <div className='form-group mt-3'>
         Passenger First Name <input type="text" className='form-control'   name="pfname"  />
     </div>

     <div className='form-group mt-3'>
         Passenger Last Name <input type="text" className='form-control'   name="plname"  />
     </div>

     <div className='form-group mt-3'>
         Passenger Nationality <input type="text" className='form-control'   name="pnationality"  />
     </div>

     <div className='form-group mt-3'>
         Passenger Date of Birth <input type="date" className='form-control' name="pdob"  />
     </div>

                 


                 <div className='form-group mt-3'>
                   <label>isAvailable ?</label>
                      <input type="radio" value={true} name="status" />Yes
                      <input type="radio" value={false} name="status" />No
                    
                 </div>
                 
                            
             <Button type='submit'  name="submit" className='btn btn-success mt-4'   >Add Trip </Button>
</form>
        </div>
    )
}
export default Add_Trips;
