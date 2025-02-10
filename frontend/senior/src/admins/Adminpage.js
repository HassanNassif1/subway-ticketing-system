import React from 'react';
import { MdTrain } from 'react-icons/md';
import {FaEdit } from 'react-icons/fa'
import {RiDeleteBin5Fill} from 'react-icons/ri'
import {AiFillSchedule} from 'react-icons/ai'

import './Admin.css';
import {useHistory} from 'react-router-dom';
import {GrTicket} from 'react-icons/gr';
import {MdPersonAddAlt1} from 'react-icons/md'
import {GrUserWorker} from 'react-icons/gr'
import { BiTrain} from 'react-icons/bi'
import {GiCook} from 'react-icons/gi'
import {Link} from 'react-router-dom'




function Adminpage(){
    let history = useHistory();
    

    // const handleClick = () =>{
    //     history.push("/Tickets");
    // } 

    const Ticket = () =>{
        history.push("/AddTickets");
    } 

    const Passenger = () =>{
        history.push("/AddPassengers");
    } 
    const EditPassenger = () => {
        history.push("/EditPassengers");
    }

    const Train = () =>{
        history.push("/AddTrain");
    } 

    const DeletePassenger = () =>{
        history.push("/DeletePassengers");
    } 

    const DeleteTicket = () =>{
        history.push("/DeleteTickets");
    } 

    const DeleteTrain = () => {
        history.push("/DeleteTrains")
    }

   

    const DeleteDriver = () => {
        history.push("/DeleteDrivers")
    }

    

    const AddEmployee = () => {
        history.push("/AddEmployee")
    }

    const DeleteChef = () => {
        history.push("/DeleteChef")
    }

    const DeleteEngineer = () => {
        history.push("/DeleteEngineer")
    }

   

return(

    
<div  align="center">
{/* <img src={rw} width={'100%'}/> */}

<Link className='Link' to = {'/Home'}><h3 align="left">Go to Home Page</h3></Link> 


<br></br> 

<div className='icons-inline'>  <b>Add Trip</b> <MdTrain    className='icon'/> </div>
 

<div className='icons-inline'><b>Edit Trip</b> <FaEdit className='icon'/></div>




<div className='icons-inline'><b>Delete Trip</b> <RiDeleteBin5Fill className='icon'/></div>


<div className='icons-inline'><b> Trip Schedules</b> <AiFillSchedule className='icon'/></div><br></br>


<div className='icons-inline'><b> Add Ticket</b> <GrTicket  onClick={() =>Ticket()}  className='icon'/></div>

<div className='icons-inline'><b>Edit Ticket</b> <FaEdit className='icon'/></div>

<div className='icons-inline'><b>Delete Ticket</b> <RiDeleteBin5Fill onClick={() =>DeleteTicket()} className='icon'/></div><br></br>


<div className='icons-inline'><b>Add Passenger</b> <MdPersonAddAlt1 onClick={() =>Passenger()} className='icon'/></div>

<div className='icons-inline'><b>Edit Passenger</b> <FaEdit onClick={() =>EditPassenger()} className='icon'/></div>

<div className='icons-inline'><b>Delete Passenger</b> <RiDeleteBin5Fill onClick={() =>DeletePassenger()} className='icon'/></div><br></br>





<div className='icons-inline'>  <b>Add Employee Details</b> <GrUserWorker  onClick={() =>AddEmployee()} className='icon'/> </div>

<div className='icons-inline'><b>Edit Driver</b> <FaEdit className='icon'/></div>

<div className='icons-inline'><b>Delete Driver</b> <RiDeleteBin5Fill  onClick={() =>DeleteDriver()}className='icon'/></div>

<div className='icons-inline'><b>Delete Chef</b> <GiCook onClick={() =>DeleteChef()} className='icon'/></div>

<div className='icons-inline'><b>Delete Engineer</b> <RiDeleteBin5Fill onClick={() =>DeleteEngineer()} className='icon'/></div><br></br>


<div className='icons-inline'><b>Add Train</b> <BiTrain onClick={() =>Train()} className='icon'/></div>

<div className='icons-inline'><b>Edit Train</b> <FaEdit className='icon'/></div>

<div className='icons-inline'><b>Delete Train</b> <RiDeleteBin5Fill onClick={() =>DeleteTrain()} className='icon'/></div><br></br>









</div>




);



}

export default Adminpage;