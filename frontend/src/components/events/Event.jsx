import React, { useState,useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import "./Event.css"
import axios from 'axios'
import Footer from '../footer/Footer'
export default function Event() {
  
  const [events,setEvents]=useState([]);
  useEffect(() => {
    axios.get("http://localhost:8081/api/v1/auth/admin/events")
    .then((r)=>{
      setEvents(r.data);
    })
  }, [])

  
  
  return (
    <>
    <Navbar/>
        <div><center><h1 id='s-title'>Events</h1></center></div>
        <div className='venues'>
        
        {events.map(e=>
            <div className='venue'>
                <img src={e.link}/>
                <h1 id='s-name'>{e.type}</h1>
               <p id='s-price'>{e.des}</p> 
               <p id='s-price'>{e.peop}</p> 
               <p id='s-price'>{e.time}</p> 
               <button onClick={()=>{
                  localStorage.setItem('event',JSON.stringify(e));
                }}>Choose Event</button>
            </div>
        )}
        </div>
        <Footer/>
        </>
  )
}
