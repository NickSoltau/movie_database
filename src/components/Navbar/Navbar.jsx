import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo_img from "../../assets/logo.png";
import { Link } from "react-scroll";




const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current?.classList.add("nav__dark");
      } else {
        navRef.current?.classList.remove("nav__dark");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar" ref={navRef}>
      <div className="logo__wrapper">
        <Link to="home" smooth={true} offset={0} duration={500}>
          <img src={logo_img} alt="" className="logo" />
        </Link>
      </div>
      <ul className="navbar__links">
        <li className="navbar__link">
          <Link to="home" smooth={true} offset={0} duration={500}>Home</Link>
        </li>
        <li className="navbar__link">
          <Link to="home"  smooth={true} offset={100} duration={500}>Search</Link>
        </li>
        <li className="navbar__link">
          <Link to="home"  smooth={true} offset={500} duration={500}>Blockbusters</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
