import './App.css';
import React from 'react'
import HeaderIndex from './Components/HomePage/index.js'
import OurStoryIndex from './Components/OurStory/index.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom'   
import Header from './Components/HomePage/Header';
import MembershipIndex from '../src/Components/Membership/index'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HeaderIndex/>}>
      </Route>
      <Route path='/OurStory' element={<OurStoryIndex/>}></Route>
      <Route path='/Membership' element={<MembershipIndex/>}></Route>
    </Routes>
  </BrowserRouter>
  );
};
