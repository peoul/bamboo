import "./hero.css";
import Pen from "../../assets/bamboo_pen.svg?react";
import Down from "../../assets/down.svg?react"


const HeroSection = () => {
  return (
    <div className="hero">
      <Pen className="pen"/>
      <div className="hero_title">
        <h1>Bamboo</h1>
        <p>Write with grace</p>
        <div className="hero_action">
          <a href="#feature_section"><Down className="down"/></a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
