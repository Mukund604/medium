import React from 'react'
import Header from './Header'
import MainContent from './MainContent'
import RecomendedPosts from './RecomendedPosts'
import Footer from './Footer'

export default function index(){
  return (
    <div>
        <Header/>
        <MainContent/>
        <RecomendedPosts/>
        <Footer/>
    </div>
  )
}
