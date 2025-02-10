import React from 'react'
import Website from './Website';
// import trainnight from './trainnight.jpg';
import './Website.css';
import { Carousel } from 'react-bootstrap';
import img1 from './people.jpg';
import img2 from './p.png';
import img3 from './mask.jpg';
import kid from './kid.jpg';
import food from './food.jpg';
import Barchart from './Barchart';

function Home() {
  return (
    <div>
    <Website/>
    <Carousel fade={true} pause={false} className='Carousel'>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
         height={'20%'}
        />
        <Carousel.Caption>
          <h1 className='slidertext'>We are always full of passengers!</h1>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={img2}
          alt="Third slide"
          height={'20%'}
        />
        <Carousel.Caption>
        <h1 className='slidertext'>You can book a ticket wherever you are ! </h1>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
          height={'20%'}
        />
        <Carousel.Caption>
        <h1 className='slidertext'>We are here for your duties! </h1>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

   <div className='chartbg'>
   <Barchart/>
   <br></br><br></br>
   <h3 className='covid'>The spread of the COVID-19 pandemic in the world has led to a decrease in the number of passengers<br></br>
      by more than half in the first six months of 2020 compared with the same period in 2019.</h3>
    </div>
<div>

  <h2>What are Train safety rules?</h2>
  <ol className='ol'>
    <li>Buy your train tickets online.</li>
    <li>Wear an N-95 mask and clinically approved gloves at all times during your journey. It is also advisable to carry spare disposable masks and gloves.</li>
    <li>Bring your own bedding and pack it in a well-sanitised bag after use.</li>
    <li>Keep important documents and wallet in a sealed bag.</li>
    <li>Do not forget essentials like spare plastic pouches, hand sanitizer, water bottle, paper soap, some snacks, comfortable footwear and disposable napkins or towels.</li>
    <li>Maintain a safe distance (at least 6-feet) from fellow passengers and station staff.</li>
    <li>Once you find your berth, clean it with an alcohol-based sanitizer. Apply it on other areas as well which you may come in contact with like the berth handles and ladder (if you’re allotted the upper berth).</li>
    <li>Wash hands frequently and avoid touching your eyes, nose and mouth.</li>
    <li>Forbid sharing your seat/berth with fellow passengers.</li>
    <li> Neither share your food with anyone nor eat anyone’s offerings.</li>
    <li>Avoid purchasing snacks or any other item from the train station.</li>
    <li>In case you buy something, either make online payment or ask the vendor to place the change in a plastic bag. Use sanitizer to decontaminate the wrapper or bottle of the purchased item before consuming.</li>
    <li>Be extremely cautious while using toilets and avoid touching anything especially after washing your hands with soap.</li>
    <li>Sanitise your hand immediately after touching the handrail, coach door handle, toilet door, etc.</li>
    <li>Be patient and do not hurry while boarding or de-boarding the train as it may lead to coming in contact with other passengers.</li>
    <li> Handle the luggage without making any direct contact with it (wear gloves while handling your bags).</li>
    <li>Do not discard mask, gloves or other trash at the station or outside it. Carefully place them in a sealed bag and dump in a closed dustbin.</li>
    <li>As soon as you reach your hotel, change your clothes and footwear, and take a hot shower.

We hope with these measures, you will surely remain safe and help in breaking the COVID-19 chain.</li>
  </ol>
</div><br></br><br></br>


<div className='inline'>

<div className='inline'>
<h2>Take care of your child!</h2>
  <img className='img' src={kid} width={700} height={500}/>
</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<div className='inline'>
<h2 >We provide you a fast food service!</h2>
  <img className='img' src={food}  width={700} height={500}/>

</div>

</div>
<br></br>
<div className='footer'>
  
  <h6 className='copyright'>©2022 RailWay All Rights Reserved</h6>


</div>




    </div>
  )
}

export default Home;