import React from 'react'
import { Link } from 'react-router-dom'

export default function Admin() {
  return (
    <>
        <div className='admin'>
            <Link to='/viewBookings'>View All Bookings</Link>
            <Link to='/approveBookings'>Approve Bookings</Link>
            <Link to='/deleteBookings'>Delete Bookings</Link>
        </div>
    </>
  )
}
