import { useEffect, useState } from "react";
import "./navbar.css"
import { Link } from "react-router";
import Dark from "../assets/dark_mode.svg?react"
import Light from "../assets/light_mode.svg?react"


const Navbar = () => {
  const [light, setLight] = useState(false);

  const lightHandler = () => {
    setLight((prev) => !prev);
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      light ? "dark" : "light"
    );
  }, [light]);

  return (
    <div className="navbar">
      <button onClick={lightHandler}> {light ? <Light/> : <Dark/>}</button>
      <Link to={"/login"}>Login </Link>
    </div>


  );
};

export default Navbar;
