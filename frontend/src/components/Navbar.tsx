import { useEffect, useState } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router";
import Dark from "../assets/dark_mode.svg?react";
import Light from "../assets/light_mode.svg?react";

const Navbar: React.FC = () => {
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

  const location = useLocation();

  console.log(location);

  return (
    <div className="navbar">
      <button onClick={lightHandler}> {light ? <Light /> : <Dark />}</button>
      {location.pathname === "/" && (
        <Link to={"/get-started"}>Get Started </Link>
      )}

      {location.pathname === "/get-started" && <Link to={"/"}>Home</Link>}
    </div>
  );
};

export default Navbar;
