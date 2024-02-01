import React, { useEffect } from 'react'
import { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {editProducts,removeCart} from '../Redux/actions/action'
import Navbar from '../navbar/Navbar'
import "./Bookings.css"
import { Link } from 'react-router-dom'
import ApprovedBookings from './ApprovedBookings'
import Footer from '../Footer/Footer'
export default function Bookings() {
    

    const allProd=useSelector(state=>state)
    const bookings=allProd.allProducts.cartProduct
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
          {filtered.map(booking=>
              <div className='booking'>
                  <img src={booking.link}/>
                  <h1 id='s-name'>{booking.name}</h1>
                <p id='s-price'>₹{booking.price}</p> 
                <p id='s-price'>{booking.location}</p> 
                <p id='s-price'>Time:{booking.dur}</p>
                <p id='s-price'>No of Peoples:{booking.peop}</p>
                <p id='s-price'>Phone Number:{booking.phon}</p>
                <p id='s-price'>Status:{booking.statu}</p>
                {/* <p id='s-price'>{booking.statu}</p> */}
                {/* <button onClick={()=>
                  dispatch(editProducts(booking))
                  }>Approve</button> */}
                <button onClick={()=>{

                  confirm("Are you sure of cancelling the booking")
                  dispatch(removeCart(booking))
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

