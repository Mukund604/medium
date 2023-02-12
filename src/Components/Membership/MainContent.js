import Css from '../Membership/Css/MainContent.css'
import React from 'react'

export default function MainContent(){
  return (
    <div className='Main'>
        <div className='FuelGreat'>
            <h1>Fuel great thinking.</h1>
            <p>Become a Medium member to enjoy unlimited access and <br></br>
            directly support the writers you read most.</p>
        </div>

        <div className='infoDiv'>
            <div className='div1'>
                <h5>Get unlimited access to every story.</h5>
                <img src={require('../Membership/images/UnlimitedReading.svg')}></img>
                <p>Read any article in our entire library across all your devices — with no paywalls, story limits or ads.</p>
            </div>
            <div className='div2'>
                <h5>Support the voices you want to hear more from.</h5>
                <img src={require('../Membership/images/Support.svg')}></img>
                <p>A portion of your membership will directly support the writers and thinkers you read the most.</p>
            </div>
        </div>
        <div className='TakeYour'>
            <h1>Take your mind <br></br>
            in new directions.</h1>
            <button className='button1'>Get unlimited Access</button>
        </div>
    </div>
  )
}
