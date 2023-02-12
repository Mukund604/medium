import React from 'react'
import Css from '../HomePage/css/Footer.css'
export default function Footer(){
  return (
    <footer>
        <div className='FooterMain'>
            <div className='imageContainer'>
                <img className='MediumLogo' src={require("../HomePage/images/logo1.png")}></img>
            </div>
            <div className='textContainer'>
                <p>Every idea needs a <b>Medium.</b></p>
            </div>
        </div>
    </footer>
  )
}
