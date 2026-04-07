import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo_img from '../../assets/logo.png'


const Navbar = () => {
  const navRef= useRef();

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY >= 80) {
      navRef.current?.classList.add( 'nav__dark');
    } else {
      navRef.current?.classList.remove('nav__dark');
    }
  };

  window.addEventListener('scroll', handleScroll);
  
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  return (
    <div className='navbar' ref={navRef}>
      <div className="logo__wrapper">
        <img src={logo_img} alt='' className='logo' />
      </div>
      <ul className='navbar__links'>
        <li className='navbar__link'>Home</li>
        <li className='navbar__link'>Search</li>
        <li className='navbar__link'>Blockbusters</li>
      </ul>
    </div>
  )
}

export default Navbar
