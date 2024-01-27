import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './home/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={Home}></Route>
        </Routes>
      </BrowserRouter>
        {/* Hello */}
    </>
  )
}

export default App
