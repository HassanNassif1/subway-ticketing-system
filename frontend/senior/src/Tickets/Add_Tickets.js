import React from 'react'

import 'react-responsive-combo-box/dist/index.css'
import ComboBox from 'react-responsive-combo-box'

import { Button } from 'react-bootstrap'
import BootstrapNavbar from '../BootstrapNavbar';
function Add_Tickets(){
    let stations = [ '72nd Street station',' 42nd Street-Bryant Park/Fifth Avenue'];

    return(
        
        <div align ="center">
            <BootstrapNavbar/>
 <form className='form-group' method="post" action={'http://localhost:5000/Add_Tickets'} >
           <input type="date" className='form-control' name="TickDate"  placeholder=" Ticket Date" />
                           
                 <div className='form-group mt-3'>
                     From Station &nbsp;&nbsp;<ComboBox className='input-fields' options={stations} enableAutocomplete name="FromStation" />
                 </div>

                 <div className='form-group mt-3'>
                      To Station &nbsp;&nbsp;<ComboBox className='input-fields' options={stations} enableAutocomplete name="ToStation" />
                 </div>

                <div className='form-group mt-3'>
                               
            <input type="time" className='form-control' name="Ticktime"  placeholder="Ticket Time" />

            <Button type='submit'  name="submit" className='btn btn-success mt-4' >Add Ticket</Button>
        </div>
        </form>
        </div>
    )
}
export default Add_Tickets;