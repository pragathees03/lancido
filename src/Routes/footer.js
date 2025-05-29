import React from 'react'
import { 
    FaBrush, FaBullhorn, FaVideo, FaCode, FaPenNib, 
    FaHome, FaHeart, FaMailBulk, FaBell,
    FaInstagram,  FaLinkedin, FaGithub, FaDiscord
  } from 'react-icons/fa';
  
  import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
export default function footer() {
  return (
    <footer>
      <div className='footer1'>
        <ul className='social'>
          <li><Link to="https://www.instagram.com/i_pragathees._/"><FaInstagram color='white'size={30}/></Link></li>
          <li><Link to="linkedIn"><FaLinkedin color='white'size={30}/></Link></li>
          <li><Link to="https://github.com/pragathees03"><FaGithub color='white'size={30}/></Link></li>
          <li><Link to="https://canary.discord.com/channels/944949103178174474/944949103178174477"><FaDiscord color='white'size={30}/></Link></li>
        </ul>
        <div className='footbox'> © Copyright: Praga_Designs 2025</div>
      </div>
    </footer>
  )
}
