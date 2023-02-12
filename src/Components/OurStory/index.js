import React from 'react'
import OurStoryContent from './OurStoryContent.js'
import Header from '../HomePage/Header.js'
import Css from './Css/index.css'
import Footer from '../HomePage/Footer.js'

export default function index(){
  return (
    <div>
        <Header/>
        <OurStoryContent/>
        <Footer/>
    </div>
  )
}
