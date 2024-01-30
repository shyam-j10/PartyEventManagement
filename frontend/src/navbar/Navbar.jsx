import React, { useState,useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const [scroll,setScroll]=useState("nav");
   useEffect(() => {
    window.addEventListener("scroll",()=>{
      if(window.scrollY<900){
        console.log(window.scrollY)
        setScroll("nav");
      }else{
        setScroll("nav-fixed");
      }
      })
  })
 


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
          <a href="/" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="/about" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="/photos" className="nav__link">
            Galleria
          </a>
        </li>
        <li className="nav__item">
          <a href="/services" className="nav__link">
            Services
          </a>
        </li>
        <li className="nav__item">
          <a href="/login" className="nav__link">
            Login
          </a>
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