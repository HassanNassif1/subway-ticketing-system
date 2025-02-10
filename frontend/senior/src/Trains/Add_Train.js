import React from "react";
import { Button } from 'react-bootstrap'

import BootstrapNavbar from '../BootstrapNavbar';
function Add_Train(){


    return(
        <div align ="center">
            <BootstrapNavbar/>
 <form className='form-group' method="post" action={'http://localhost:5000/Add_Train'} >
       <input type="text" className='form-control' name="Tr_Destination" placeholder="Destination" />
                           
                            
         <div className='form-group mt-3'>
                 <input type="text" className='form-control' name="Tr_Speed" placeholder="Speed" />
          </div>

           <div className='form-group mt-3'>
                  <input type="text" className='form-control' name="Tr_Weight"  placeholder="Weight" />
           </div>

            <div className='form-group mt-3'>
                    <input type="text" className='form-control' name="Tr_MotorPower"  placeholder="Motor Power" />
            </div>

            <div className='form-group mt-3'>
                     <input type="number" className='form-control' name="Tr_Passengers"  placeholder="Passengers" />
             </div>

             <div className='form-group mt-3'>
                      <input type="number" className='form-control' name="Tr_Number"  placeholder="Number" />
             </div>
                          
                            
                 <Button type='submit'  name="submit" className='btn btn-success mt-4' >Add Train</Button>
                        </form>
        </div>
    )
}
export default Add_Train;
