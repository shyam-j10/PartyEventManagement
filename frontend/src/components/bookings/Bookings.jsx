import React, { useEffect } from 'react'
import { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {editProducts,removeCart} from '../redux/actions/action'
import Navbar from '../navbar/Navbar'
import "./Bookings.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import ApprovedBookings from './ApprovedBookings'
import Footer from '../footer/Footer'
export default function Bookings() {
    const [bookings,setBookings]=useState([]);
  useEffect(() => {
    axios.get("http://localhost:8081/api/v1/auth/user/bookings")
    .then((r)=>{
      setBookings(r.data)
    })
  })

    const allProd=useSelector(state=>state)
    // const bookings=allProd.allProducts.cartProduct
    function filter_status(event) {
      return event.statu == "Pending";
  }
  
  var filtered = bookings.filter(filter_status);
    const dispatch=useDispatch()
    const [num,setNum]=useState(true)
    useEffect(() => {
      if(bookings==null){
        setNum(false)
      }else{
        setNum(true)
      }
    })

  return (
    <div className='h'>
      <Navbar/>

      {/* <Link to='/approvedBookings'>Approved</Link> */}
      <div><center><h1 id='s-title'>PENDING BOOKINGS</h1></center></div>
        {num?
          <div className='bookings'>
          {bookings.map(booking=>
              <div className='booking'>
                  <img src={booking.vlink}/>
                <p id='s-price'>Event:{booking.event}</p> 
                <p id='s-price'>Venue:{booking.venue}</p> 
                <p id='s-price'>Service:{booking.service}</p>
                <p id='s-price'>ServicePrice:{booking.sprice}</p>
                <p id='s-price'>VenuePrice:{booking.vprice}</p>
                <p id='s-price'>Status:{booking.status}</p>
                {/* <p id='s-price'>{booking.statu}</p> */}
                {/* <button onClick={()=>
                  dispatch(editProducts(booking))
                  }>Approve</button> */}
                <button onClick={()=>{

                  let result=confirm("Are you sure of cancelling the booking")
                  if(result){
                    axios.delete(`http://localhost:8081/api/v1/auth/user/bookings/${booking.bid}`)
                  }
                }
                }>Cancel</button>
              </div>
          )}
          </div> :" No bookings"
      }
      <ApprovedBookings/>
      <Footer/>
    </div>
  )
}

