import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
export const Navbar = () => {
  return (
    <div className='menu'>
        <NavLink to='Table'>Table</NavLink>
        <NavLink to='SighUp'>Sigh Up</NavLink>
        <NavLink to='User'>User</NavLink>
    </div>
  )
}
