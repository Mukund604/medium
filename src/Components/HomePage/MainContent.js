import React from 'react'
import Css from './css/MainPage.css'
export default function MainContent(){
  return (
    <div className='MainContent'>  
        <div className='StayCurious'>
            <h1>Stay curious.</h1>
            <p>Discover stories, thinking,<br></br> and expertise from writers on any topic.</p>
            <button>  Start reading   </button>
        </div>
        <div className='VideoDiv'>
        <img src={require('./images/binaryAnimation.gif')} /> 
        </div>
    </div>
  )
}


