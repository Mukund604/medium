import React from 'react'
import Css from './css/Header.css'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function Header(){
  return (
    <div className='Header'>
        <div className='Header-left'>
        <Link to={"/"}><img className='MediumLogo' src={require('./images/logo1.png')} /> </Link>
        </div>
        <div className='Header-right'>
          <ul className='HeaderList'>
            <li> <Link to="/OurStory">Our Story</Link></li>
            <li><Link to='/Membership'>Membership</Link></li>
            <li>Write</li>
            {/* <li>Sign In</li> */}
            <li><button>Get Started</button></li>
          </ul>
        </div>
        <Outlet/>
    </div>
  )
}
