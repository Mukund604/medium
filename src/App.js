import './App.css';
import React from 'react'
import HeaderIndex from './Components/HomePage/index.js'
import OurStoryIndex from './Components/OurStory/index.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom'   
import Header from './Components/HomePage/Header';
import MembershipIndex from '../src/Components/Membership/index'
import SignInIndex from '../src/Components/SignIn/index'
import MainContentWrite from './Components/Write/index';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HeaderIndex/>}>
      </Route>
      <Route path='/OurStory' element={<OurStoryIndex/>}></Route>
      <Route path='/Membership' element={<MembershipIndex/>}></Route>
      <Route path='/Signin' element={<SignInIndex/>}></Route>
      <Route path='/Write' element={<MainContentWrite/>}></Route>
    </Routes>
  </BrowserRouter>
  );
};
