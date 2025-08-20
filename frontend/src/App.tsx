import { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import HeroSection from './components/Hero'

import './App.css'


function App() {

  return (
    <>

      <Navbar/>

      <div className='body'>
        <HeroSection/>
      </div>
   

    </>
  )
}

export default App
