import React,{useState,useEffect} from 'react';
import BootstrapNavbar from '../BootstrapNavbar';
import { Table } from "reactstrap";

import '../styletables/Style.css';
import 'bootstrap/dist/css/bootstrap.css';

import 'react-responsive-combo-box/dist/index.css'

import { Button, Modal} from 'react-bootstrap'






     function Trains(){


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
        const [Search, setSearch] = useState('');
      
        
    
    
        return (
             
              
          <div>
           
             <BootstrapNavbar/>
             <br></br><br></br>
    
         Search <input 
                  type="search" 
                  name="search" 
                  placeholder="Search for a Train "
                  onChange={(event)=>{setSearch(event.target.value)}} />
    
    
    <div>
      <Table  className='TableDesign' border="1" cellpadding="10" cellspacing="0" width="100"  >
          <thead >
              <tr>
                   <th>Train id</th>
                   <th>Destination </th>
                   <th>Speed</th>
                   <th>Motor Power</th>
                   <th>Weight</th>
                   <th>Passengers</th>
                   <th>Number</th>
              </tr>
              </thead>
              <tbody >
                    
                      
    {Trains.filter((train) => {
    
    if(Search == ""){
    return (
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
                  </tr>
              
              ))
    )}
              </tbody>
    
    
    
    
    )
    }else if (train.train_number == Search) {
    return train;
    
    }
    else if (train.train_id == Search) {
    return train;
    }else if(train.train_id !== Search) {
    return ;
    }}).map((train) =>{
    return(
    
    <tr>
            <td>{train.train_id}</td>
                     <td>{train.train_destination}</td>
                     <td>{train.train_speed}</td>
                     <td>{train.train_weight}</td>
                     <td>{train.train_motorpower}</td>
                     <td>{train.train_passengers}</td>
                     <td>{train.train_number}</td>
             
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
export default Trains;
