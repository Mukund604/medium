import React from 'react'
import Css from './Css/SignIn.css'
export default function SignIn(){
  return (
    <div className='SignInContainer'>
       <div className='SignInInner'>
        <div className='Login'>Login</div>
        <div><input type="text" placeholder='Enter email.' className='EmailInput'></input></div>
        <div>Enter Password</div>
        <div><input type="password" placeholder='Enter password' className='EmailInput'></input></div>
        <div><button className='SignInButton'>Sign In</button></div>
       </div>
    </div>
  )
}
