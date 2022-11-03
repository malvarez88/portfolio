import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import {BiBook} from 'react-icons/bi'
import {BiMessageAltDetail} from 'react-icons/bi'
import {RiSuitcaseLine} from 'react-icons/ri'

import {useState} from 'react'

const Navbar = () => {
  const [active, setActive] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=> setActive('#')} className={active === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={()=> setActive('#about')} className={active === '#about' ? 'active' : ''}><SiAboutdotme /></a>
      <a href='#portfolio' onClick={()=> setActive('#portfolio')} className={active === '#portfolio' ? 'active' : ''}><RiSuitcaseLine /></a>
      <a href='#experience' onClick={()=> setActive('#experience')} className={active === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href='#contact' onClick={()=> setActive('#contact')} className={active === '#contact' ? 'active' : ''}><BiMessageAltDetail /></a>
    </nav>
  )
}

export default Navbar