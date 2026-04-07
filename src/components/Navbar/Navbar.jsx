import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo_img from "../../assets/logo.png";

import { Link } from "react-router-dom";

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
        <Link to="/">
          <img src={logo_img} alt="" className="logo" />
        </Link>
      </div>
      <ul className="navbar__links">
        <li className="navbar__link">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar__link">
          <Link to="/">Search</Link>
        </li>
        <li className="navbar__link">
          <Link to="/">Blockbusters</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
