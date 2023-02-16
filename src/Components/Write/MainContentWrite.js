import React from 'react'
import Css from '../Write/Css/MainContentWrite.css'
export default function MainContentWrite(){
  return (
    <div className='WriteDiv'>
        <div className='WriteContainer'>
            <div className='PublishGrow'>
                <p>START A BLOG FOR FREE</p>
                <h1>Publish, grow, and earn, all in one place.</h1>
                <span>If you have a story to tell, knowledge to share, or a perspective to offer — <br></br>welcome home. Sign up for free so your writing can thrive in a network <br></br>supported by millions of readers — not ads.</span><br></br>
                <button className='StartWriting'>Start Writing</button>
            </div>
            <div className='FindAudiance'>
                <h1>Find and grow your<br></br> audiance.</h1>
                <p><b>With simple tools and features, you have the chance to connect with over 100 million curious readers.</b></p>
            </div>
        </div>
    </div>
  )
}
