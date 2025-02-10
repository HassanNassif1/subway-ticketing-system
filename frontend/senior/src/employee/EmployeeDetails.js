import React, { useEffect, useState } from "react";
import {Button,Table} from 'react-bootstrap';
import BootstrapNavbar from '../BootstrapNavbar';
import '../styletables/Style.css'

function EmployeeDetails(props){

   
    const getEmployee = () => {
        const API = 'http://127.0.0.1:5000/Employee';
        fetch(API)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setEmployee(data);
          });
      }
  
       useEffect(() => {
         getEmployee();
         
      },[]) 

      const [Employee, setEmployee] = useState([]);
      const [Search, setSearch] = useState('');
    
      
 

      return (
           
            
        <div>
         
         <BootstrapNavbar/>
                    <br></br><br></br>

       Search <input 
                type="search" 
                name="search" 
                placeholder="Search for an Employee "
                onChange={(event)=>{setSearch(event.target.value)}} />


<div>
    <Table  className='TableDesign' border="1" cellpadding="10" cellspacing="0" width="100"  >
        <thead >
            <tr>
                <th>Employee id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Birth of Date</th>
                <th>Employee Type</th>
                <th>Nationality</th>
                <th>Gender</th>
                <th>Salary</th>
            </tr>
            </thead>
            <tbody >
                  
                    
{Employee.filter((emp) => {

if(Search == ""){
  return (
            <tbody >
            {!Employee  || Employee.length <= 0 ? (
                <tr>
                <td colSpan="6" align="center">
                  <b>No Employees yet.</b>
                </td>
              </tr>):(
       
       Employee.map((emp =>
                <tr >
                  <td>{emp.emp_id}</td>
                  <td>{emp.emp_fname}</td>
                  <td>{emp.emp_lname}</td>
                  <td>{emp.emp_birthofdate}</td>
                  <td>{emp.emptype_id} </td>
                  <td>{emp.emp_nationality}</td>
                  <td>{emp.emp_gender}</td>
                  <td>{emp.emp_salary}</td>
                </tr>
            
            ))
)}
            </tbody>




  )
}else if (emp.emp_fname.toLowerCase().includes(Search.toLowerCase())) {
  return emp;

}
else if (emp.emp_id == Search) {
  return emp;
}else if(emp.emp_id !== Search) {
 return ;
}}).map((emp,key) =>{
return(

<tr>
            <td>{emp.emp_id}</td>
            <td>{emp.emp_fname}</td>
            <td>{emp.emp_lname}</td>
            <td>{emp.emp_birthofdate}</td>
            <td>{emp.emptype_id} </td>
            <td>{emp.emp_nationality}</td>
            <td>{emp.emp_gender}</td>
            <td>{emp.emp_salary}</td>
           
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
export default EmployeeDetails;