import React from 'react'
import Css from './Css/OurStory.css'
export default function OurStoryContent() {
  return (
    <div>
      <div className='EveryIdea'>
        <p>Every idea needs a <b>Medium.</b></p>
      </div>
      <div className='ContAndImage'>
        <div className='contentDiv'>
          <p>
            The best ideas can change who we are. Medium is where those ideas take shape, take off, and spark powerful conversations. We’re an open platform where over 100 million readers come to find insightful and dynamic thinking. Here, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface. Our purpose is to spread these ideas and deepen understanding of the world. <br></br>
            We’re creating a new model for digital publishing. One that supports nuance, complexity, and vital storytelling without giving in to the incentives of advertising. It’s an environment that’s open to everyone but promotes substance and authenticity. And it’s where deeper connections forged between readers and writers can lead to discovery and growth. Together with millions of collaborators, we’re building a trusted and vibrant ecosystem fueled by important ideas and the people who think about them.
          </p>
        </div>
        <div className='imageDiv'>
        <iframe src="https://player.vimeo.com/video/467834328?api=1&background=1&mute=1&loop=1" width="100%" height="100%" positioning="relative" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
        </div>
      </div>
      <div className='OverMillion'>
        <div className='oneHundredMillion'>
          <h1>Over 100 Million Readers and growing.</h1>
        </div>
        <div className='imageDiv2'>
          <img src={require('./images/logo.png')}/>
          <p>"Medium is trying to shift the paradigm. They’re catering to those looking for fresh, new, authentic voices. I believe wholeheartedly in their mission."</p>
          <h1>Joel Leon</h1>
        </div>
      </div>

      <div className='lastDiv'>
        <div className='CubeDiv'>
        <iframe className='cube' src="https://player.vimeo.com/video/448735219?api=1&background=1&mute=1&loop=1" width="100%" height="100%" positioning="relative" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
        </div>
        <div className='ReadWrite'>
        Read, write, and expand your world.
        </div>
      </div>
    </div>
  )
}
