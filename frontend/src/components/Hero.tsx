import "./hero.css"
import Pen from "../assets/bamboo_pen.svg?react"

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero_title">
        <h1>Bamboo</h1>
              <p>A Note Taking App</p>
      </div>

      <Pen/>

    </div>
  );
};

export default HeroSection;
