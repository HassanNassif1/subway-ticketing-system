


import React,{useState,useEffect} from 'react';
import { Table } from "reactstrap";
import BootstrapNavbar from '../BootstrapNavbar';

import '../styletables/Style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal} from 'react-bootstrap'

function Edit_Employees() {


   //api that gets all the data from the database
   
    const getEmployees = () => {
      const API = `http://127.0.0.1:5000/Employee`;
      fetch(API)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setEmployees(data);
        });
    }

     useEffect(() => {
       getEmployees();
       
    },[]) 

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



   
 // array that holds all the data take from the database

 
  
  const [Employees, setEmployees] = useState([]);
  const [EmployeeType, setEmployeeType] = useState([]);

  const [ViewPost, SetPostShow] = useState(false)
  const handlePostShow = () => { SetPostShow(true) }
  const hanldePostClose = () => { SetPostShow(false) }
  const [ViewUpdate,SetUpdateShow] = useState(false)
  const handleUpdateShow = () => { SetUpdateShow(true) }
  const handleUpdateClose = () => { SetUpdateShow(false) }
  
  const [setemp_fname] = useState("")
  const [setemp_lname] = useState("")
  const [setemp_birthofdate] = useState("")
  
  const [setemp_desc] = useState("")
  const [setemp_nationality] = useState("")
  const [setemp_salary] = useState("")
  
  
   
          return (
            
            
            <div>
<BootstrapNavbar/>

                        <Table  className='TableDesign' border="1" cellpadding="10" cellspacing="0" width="100" >
                         
                            <thead >
                                <tr>
                                  <th>Employee id</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Employee Type id</th>
                                    <th>Nationality</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                    
                                </tr>
                            </thead>
                            <tbody >
                            {!Employees  || Employees.length <= 0 ? (
                                <tr>
                                <td colSpan="6" align="center">
                                  <b>No Employees yet.</b>
                                </td>
                              </tr>):(
                       
                       Employees.map((emp,i) =>
                              
                        
                            
                                <tr>

                                  <td>{emp.emp_id}</td>
                                  <td>{emp.emp_fname}</td>
                                  <td>{emp.emp_lname}</td>
                                  <td>{emp.emptype_id}</td>

                                  <td>{emp.emp_nationality}</td>
                                  <td>{emp.emp_salary}</td>

                                  <div className='row'>
                                  <td>
                                    
                                  <div>
                <div className='Buttons' >
                    <Button className='Edit' variant='warning' onClick={() => { handleUpdateShow(emp.emp_id);alert(emp.emp_id) }}>
                       Edit
                    </Button>
                </div>
                
            <div className='model-box-view'>
                <Modal
                    show={ViewUpdate}
                    onHide={handleUpdateClose}
                    backdrop="static"
                    keyboard={false}
                    
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                    <form className='form-group' method="post" action={`http://localhost:5000/Employee_Update/${emp.emp_id}`} >
                     
                                <input type="text" className='form-control'  onChange={(e) => setemp_fname(e.target.value)}  name="fname" placeholder=" First Name" />
                           
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control'  name="lname" onChange={(e) => setemp_lname(e.target.value)} placeholder=" Last Name" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="date" className='form-control'  name="birthofdate" onChange={(e) => setemp_birthofdate(e.target.value)}  placeholder=" Birth of Date" />
                            </div>
                         
                            <div >
                            Employee Type id<select className='select-list' name="type" onChange={(e) => setemp_desc(e.target.value)}>{ EmployeeType.map(emptype =><option value = {emptype.emptype_id}  > {emptype.emp_desc} </option>)}
           
                                 </select>
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' name="nationality" onChange={(e) => setemp_nationality(e.target.value)} placeholder="Nationality" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' name="salary" onChange={(e) => setemp_salary(e.target.value)}  placeholder="Salary" />
                            </div>
                           
                            
                            <Button type='submit'  name="submit" className='btn btn-success mt-4' >Edit Employee </Button>
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
                            
                            )
          )}
                            </tbody>
                           
                            
                        </Table>
                       
     
     

              </div>
              
              
               );
               
     }
export default Edit_Employees;
