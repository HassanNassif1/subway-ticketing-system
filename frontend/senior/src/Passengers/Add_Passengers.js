import React from "react";
import { Button } from 'react-bootstrap'
import BootstrapNavbar from '../BootstrapNavbar';

function Add_Passengers(){




    return(
        <div align ="center">
            <BootstrapNavbar/>
 <form className='form-group' method="post" action={`http://localhost:5000/Add_Passengers`} >
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
                            
             <Button type='submit'  name="submit" className='btn btn-success mt-4'   >Add Passenger </Button>
</form>
        </div>
    )
}
export default Add_Passengers;
