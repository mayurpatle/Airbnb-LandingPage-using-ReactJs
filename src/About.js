import React from 'react'
import { useNavigate } from 'react-router-dom' 
import  './About.css'
import Carousel from 'react-bootstrap/Carousel';

function About() {
  const  navigate =  useNavigate()  ; 

  return (
    <div className='container'> 
        <div className='flex'>
        <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmZkWJfRxb1wVrM0Tnvc6hq8c8IogCJCCSLQ&usqp=CAU' className='img'/>
        <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-OvIHxiUhH6kstffm2p6bgHr0A_Om_VRyqg&usqp=CAU' className='img2'/>
        <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQupnCv-iVct0zHnDSuw2YqvU-QrS8xMB-zQQ&usqp=CAU' className='img3'/>
        </div>
        <br />  
        <br />  
        
        <p>
        < strong>Airbnb,</strong> Inc. (/ˌɛərˌbiːɛnˈbiː/ AIR-BEE-en-BEE), based in San Francisco, California, operates an online marketplace focused on short-term homestays and experiences. The company acts as a broker and charges a commission from each booking. The company was founded in 2008 by Brian Chesky, Nathan Blecharczyk, and Joe Gebbia. Airbnb is a shortened version of its original name, AirBedandBreakfast.com. The company has been the subject of criticism for lack of regulations and enabling increases in home rents.
        
        </p>
        <p>
            <strong>
                 History</strong> :  
For a chronological guide, see Timeline of Airbnb.
After moving to San Francisco in October 2007, roommates and former schoolmates Brian Chesky and Joe Gebbia came up with the idea of putting an air mattress in their living room and turning it into a bed and breakfast.[4] In February 2008, Nathan Blecharczyk, Chesky's former roommate, joined as the Chief Technology Officer and the third co-founder of the new venture, which they named AirBed & Breakfast.[4][5] They put together a website that offered short-term living quarters and breakfast for those who were unable to book a hotel in the saturated market.[4] The site Airbedandbreakfast.com officially launched on August 11, 2008.[6][7] The founders had their first customers in the summer of 2008, during the Industrial Design Conference held by Industrial Designers Society of America, where travelers had a hard time finding lodging in the city.
        </p>
        <a href='https://en.wikipedia.org/wiki/Airbnb'> <i>
          For  More  Info  Try  Wikipedia!!  </i></a>

        

        
    
       


    </div>
  )
}

export default About