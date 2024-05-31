/* eslint-disable no-unused-vars */
import React from 'react'
import "./Nav.css"
import {menus} from "../../data"
import { Link } from 'react-scroll'
import { FaArrowRightLong } from 'react-icons/fa6'
const Nav = () => {
  return (
    <nav className='navbar'>
        <div className='column hamburger'>
        <div className='menu__group'>
            {
                menus.map((menu,index)=>(
                    <Link 
                    to={menu.routeId}
                    className='item'
                    activeClass='text__gradient'
                    smooth={true}
                    spy={true}
                    offset={-70}
                    key={index}>
                    {menu.name}     
                    </Link>
                ))
            }   
        </div>
        </div>
        <div className='column'>
            <Link to='about' className='btn contact__btn'>Get Started <FaArrowRightLong/></Link>
        </div>
        Nav
        
    </nav>
  )
}

export default Nav