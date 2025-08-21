import Navbar from './components/Navbar'
import HeroSection from './components/Hero'
import FeatureSection from './components/FeatureSection'

import './App.css'



function App() {

  return (
    <>

      <Navbar/>

      <div className='body'>
        <HeroSection/>


        <FeatureSection />

      </div>
   

    </>
  )
}

export default App
