import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import "./Venues.css"
import {useDispatch} from 'react-redux'
import { cartProducts} from '../Redux/actions/action'
export default function Venues() {
  const events=[{id:1,name:"Outdoor Wedding Party",link:"https://media.weddingz.in/images/7941daefa912e70969e8804792325945/top-5-outdoor-wedding-venues-in-gurgaon-for-you-to-get-married-in.jpg",price:"150000",location:"Thrissur",dur:"",statu:"Pending"},
                {id:2,name:"Lagoon Wedding Hall",link:"https://image.wedmegood.com/resized/450X/uploads/member/3391766/1661512242_WhatsApp_Image_2022_08_26_at_4.29.53_PM__2_.jpeg",price:"80000",location:"Coimbatore",dur:"",statu:"Pending"},
                {id:3,name:"French Town Party Hall",link:"https://image.wedmegood.com/resized/800X/uploads/member/2876203/1646646852_WhatsApp_Image_2022_02_08_at_19.36.31.jpeg",price:"100000",location:"Coimbatore",dur:"",statu:"Pending"}
              ]

  const [durr,setDurr]=useState("")
  const dispatch=useDispatch();
  
  return (
    <>
    <Navbar/>
        <div><center><h1 id='s-title'>VENUES</h1></center></div>
        <div className='venues'>
        
        {events.map(venue=>
            <div className='venue'>
                <img src={venue.link}/>
                <h1 id='s-name'>{venue.name}</h1>
               <p id='s-price'>₹{venue.price}</p> 
               <p id='s-price'>{venue.location}</p> 
               <p id='s-price'>
                  Duration:<input type="text"  onChange={(e)=>setDurr(e.target.value)}/>
                </p> 

               <button onClick={()=>{
                confirm("Booking for sure?")
                venue.dur=durr
                dispatch(cartProducts(venue))}}>Book Now</button>
            </div>
        )}
        </div>
        </>
  )
}
