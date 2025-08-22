import Navbar from "../components/index/Navbar"
import HeroSection from "../components/index/Hero"
import FeatureSection from "../components/index/FeatureSection"

import './Main.css'



function Main() {

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

export default Main
