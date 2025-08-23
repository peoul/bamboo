import Navbar from "../components/Navbar"
import HeroSection from "../components/app/Hero"
import FeatureSection from "../components/app/FeatureSection"

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
