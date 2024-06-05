import React from 'react'
import './navbar.css'
import { useState } from 'react'
import Logo from '../images/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineBars } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { links } from '../data'
const Navbar = () => {
  const [isNavShowing, setNavShowing] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className='logo' onClick={()=> setNavShowing(false)}>
          <img src={Logo} alt="Nav Logo" />
        </Link>

        <ul className={`nav__links ${isNavShowing ? 'show__nav':'hide__nav'}`}>
          {
            links.map(({ name, path }, index) => {
              return (
                <li key={index}>
                  <NavLink to={path} className={({isActive})=>isActive?'active-nav':''} onClick={()=>setNavShowing(prev => !prev)}>{name}</NavLink>
                </li>
              )
            })
          }
        </ul>
        <button className="nav__toggle-btn" onClick={()=>setNavShowing(prev => !prev)}>
          {
            isNavShowing? <MdOutlineClose/> : <AiOutlineBars/>
          }
          
        </button>
      </div>
    </nav>
  )
}

export default Navbar
