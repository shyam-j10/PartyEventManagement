import { useState, } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './home/Home'
import Navbar from './navbar/Navbar'
import Services from './services/Services'
// import Dashboard from './dashboard/Dashboard'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/nav' element={<Navbar/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          {/* <Route path='/dashboard' element={<Dashboard/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
