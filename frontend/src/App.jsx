import { useState, } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './home/Home'
import Navbar from './navbar/Navbar'
import Services from './services/Services'
import Login from './login/Login'
import Signup from './signup/Signup'
import Dashboard from './dashboard/Dashboard'
import Gallery from './gallery/Gallery'
import Venues from './venues/Venues'
import { Provider } from 'react-redux';
import {store} from "./Redux/reducer/store" 
import Bookings from './bookings/Bookings'
import Admin from './admin/Admin'
import ApproveBookings from './admin/ApproveBookings'
import DeleteBookings from './admin/DeleteBookings'
import ViewBookings from './admin/ViewBookings'
import ApprovedBookings from './bookings/ApprovedBookings'

// import HomeNavbar from './navbar/HomeNavbar'


function App() {

  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/nav' element={<Navbar/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
          <Route path='/photos' element={<Gallery/>}></Route>
          <Route path='/venues' element={<Venues/>}></Route>
          <Route path='/bookings' element={<Bookings/>}></Route>
          <Route path='/approveBookings' element={<ApproveBookings/>}></Route>
          <Route path='/approvedBookings' element={<ApprovedBookings/>}></Route>
          <Route path='/deleteBookings' element={<DeleteBookings/>}></Route>
          <Route path='/viewBookings' element={<ViewBookings/>}></Route>
          
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
