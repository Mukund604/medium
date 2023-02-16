import React from 'react'
import Css from './css/Header.css'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function Header(props){
  return (
    <div className='Header'>
        <div className='Header-left'>
        <Link to={"/"}><img className='MediumLogo' src={require('./images/logo1.png')} /> </Link>
        </div>
        <div className='Header-right'>
          <ul className='HeaderList'>
            <li className='Link1'> <Link to="/OurStory">Our Story</Link></li>
            <li className='Link1'><Link to='/Membership'>Membership</Link></li>
            <li className='Link1'><Link to="/Write">Write</Link></li>
            <li className='Link1'><Link to="/Signin">{props.name ? `Welcome - ${props.name}` : 'Sign In'}</Link></li>
          </ul>
        </div>
        <Outlet/>
    </div>
  )
}
