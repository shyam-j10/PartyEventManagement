import React, { useState,useEffect } from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom'

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const [scroll,setScroll]=useState("nav");
  //  useEffect((e) => {
    // e.preventDefault()
    // window.addEventListener("scroll",()=>{
    //   if(window.scrollY<900){
    //     console.log(window.scrollY)
    //     setScroll("nav");
    //   }else{
    //     setScroll("nav-fixed");
    //   }
    //   })
  // })
 


  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className={scroll}>
      <a href="/" className="nav__brand" id="nav-title">
        Jubilix
      </a>
      <ul className={active}>
        <li className="nav__item">
          <Link to="/bookings" className="nav__link" onClick={(e)=>e.preventDefault}>
            Bookings
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/venues" className="nav__link">
            Venues
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/photos" className="nav__link">
            Galleria
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/services" className="nav__link">
            Services
          </Link>
        </li>
        <li className="nav__item">
          <Link to ="/login" className="nav__link">
            Login
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon} id='logo'>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;