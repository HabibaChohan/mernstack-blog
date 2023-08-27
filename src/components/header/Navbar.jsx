import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';



const Navebar = () => {
   const [Mobile, setMobile] = useState (false)

   return (
       <nav>
         <div className="container nav-container">
     <h3><NavLink to="/" className="logo">Scooter<span>Insider</span></NavLink></h3>

       <ul className= {Mobile? "nav-link-mobail" : "nav-link"} onClick={() =>setMobile(false)}>
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/blog">Find Your Scooter</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/singin">SingIn</NavLink></li>
        <li>
            <div className="nav-profile">
               <div className="profile-img">
                  <img src="./images/profileimg.jpg" alt="" /></div>
               <ul>
                  <li><a href="./dashboard">Dashboard</a></li>
                  <li><a href="">Log Out</a></li>
               </ul>
            </div>
        </li>
       </ul>
       

       <button className="phone-button Open" onClick={() => setMobile(!Mobile)}>
         {Mobile? <ImCross/> : <FaBars />  }</button>

       {/*<button className="phone-button Close"><ImCross/></button>*/}
       
       </div>
   </nav>
   )
};


export default Navebar;