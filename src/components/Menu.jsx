import React from 'react'
import {NavLink} from 'react-router-dom'
import './menu.css'
const Menu = () => {
  return (
    <>
        <div className='menu'>
            <NavLink to='/' >My Weather App</NavLink>
            <NavLink to='/about'>Contact Me</NavLink>
        </div>
    </>
  )
}

export default Menu
