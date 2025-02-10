import React,{useEffect,useState} from "react";

import {Button} from 'react-bootstrap';
import BootstrapNavbar from '../BootstrapNavbar';
import 'react-responsive-combo-box/dist/index.css'
import ComboBox from 'react-responsive-combo-box'
function Add_Employee(){
    const [EmployeeType, setEmployeeType] = useState([]);
    const getEmployeeType = () => {
        const API = 'http://127.0.0.1:5000/EmpType';
        fetch(API)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setEmployeeType(data);
          });
      }
  
       useEffect(() => {
         getEmployeeType();
         
      },[]) 

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
      let gender=['Male','Female'];
    return (
        <div align ="center">
            <BootstrapNavbar/>

                <form className='form-group' method="post" action={'http://localhost:5000/Add_Employee'} >
                                <input type="text" className='form-control' name="fname" placeholder=" First Name" />
                           
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control'  name="lname"  placeholder=" Last Name" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="date" className='form-control'  name="birthofdate"  placeholder=" Birth of Date" />
                            </div>
                      

                            <div >
                            Employee Type Desc<select className='select-list' name="type"  >{ EmployeeType.map(emptype =><option value = {emptype.emptype_id} >  {emptype.emp_desc}    </option>)}
           
                                 </select>
                            </div>


                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' name="nationality"  placeholder="Nationality" />
                            </div>

                            <div className='form-group mt-3'>
                    Gender &nbsp;&nbsp;<ComboBox className='input-fields' options={gender} enableAutocomplete name="gender" />
                 </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' name="salary"  placeholder="Salary" />
                            </div>
                           
                            
                            <Button type='submit'  name="submit" className='btn btn-success mt-4' >Add Employee Details</Button>
                        </form>
        </div> 
    )
}
export default Add_Employee;