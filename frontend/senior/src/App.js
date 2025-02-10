
import './App.css';
import BootstrapNavbar from './BootstrapNavbar';
import trainnight from './trainnight.jpg';
import trainticket from './trainticket.png';
import { Table } from "reactstrap";
function App() {
 
  return (
    <div className="App">
      <BootstrapNavbar/>
    
      <img  className='Train-wallpaper' src={trainnight} width={'100%'} />
      <div  className='Second-Container'><br></br><br></br><br></br>

      <h2 >Welcome Dear, you can now book your tickets wherever you are!</h2>
      </div>

      <div>
      <Table className='tb'  border="1">

<tr>

  <td>
    <h4 align="left"> What you Get?  </h4>
  </td>

</tr>

<tr>
  <td>
    <h5 align="left">User will get 35%* cashback of up to Rs.125 on booking train ticket with Getforless</h5>
  </td>
</tr>


</Table>

<Table className='tb' border="1" >
  
  <tr>

  <td>
  <h4 align="left"> How do you get it?</h4>
  </td>

</tr>
 <tr>

  <td>
    <h5 align="left">Customers have to book a train for their preferred destination by applying coupon code: EMTTRAIN35<br/>
Offer valid only on Train bookings made till 24th Apr, 2022<br/>
Both new and existing customers can avail this offer<br/>
The offer is valid for bookings made on EaseMyTrip's website, Mobile site, Android & iOS App</h5>
  </td>

</tr>
</Table>


      <img className='offer' width={'440px'} height={'305px'}   align="right" src={trainticket}  />

     
      <Table  border="1" >
  
  <tr>

  <td>
  <h4 align="left"> What else do you need to know?</h4>
  </td>

</tr>
 <tr>

  <td>
    <h5 align="left">This offer is valid only for Train booking on all routes<br/>
The customer can avail maximum cashback of INR 125<br/>
The cashback will  be received in EaseMyTrip wallet<br/>
The Wallet Cashback is non transferrable<br/>
This cashback is valid for 90 days from the date of issuance.<br/>
There is no minimum booking amount to avail this benefit<br/>
The offer is valid on all payment method<br/>
This offer is valid once per user<br/>
The 35% cashback will be calculated on base fare and will be added to EMT Wallet<br/>
The offer can't be clubbed with any other promotional offer<br/>
Booking with the valid promo codes will be only eligible for this offer<br/>
In case of partial/full cancellation the offer stands void and it will be rolled back before processing the refunds</h5>
  </td>

</tr>
</Table>



<Table  border="1" >
  
  <tr>

  <td>
  <h4 align="left">Terms & Conditions</h4>
  </td>

</tr>
 <tr>

  <td>
    <h5 align="left">In the event of any misuse or abuse of the offer, EaseMyTrip reserves the right to deny the offer to the customers.<br/>
EaseMyTrip is the sole authority for interpretation of these terms.<br/>
In addition, EaseMyTrip standard booking and privacy policy on www.EaseMyTrip.com shall apply.<br/>
In the event of any dispute, Courts of New Delhi will have jurisdiction.<br/>
EaseMyTrip reserves the right, at any time, without prior notice and liability and without assigning any reason whatsoever, to add/alter/modify/change or vary all of these terms and conditions or to replace, wholly or in part, this offer by another offer, whether similar to this offer or not, or to extend or withdraw it altogether.<br/>
EaseMyTrip shall not be liable for any loss or damage arising due to force majeure.</h5>
  </td>

</tr>
</Table>

      </div>
     
        </div>

    


  );
}

export default App;
