import React from 'react'
import './Footer.css'
import instagram from '../../assets/instagram_icon.png'
import facebook from '../../assets/facebook_icon.png'
import youtube from '../../assets/youtube_icon.png'
import twitter from '../../assets/twitter_icon.png'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <img src= {logo} className='logo' />
      
    
        <div className="footer__icons">
            <img src={instagram} />
            <img src={facebook}/>
            <img src={youtube} />
            <img src= {twitter} />
        </div>
        <p>Copyright © 2025. Not really, but it looks official</p>
    </div>
            )
            }

export default Footer

