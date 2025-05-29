import React, { useState } from 'react';
import './App.css';
import { 
  FaBrush, FaBullhorn, FaVideo, FaCode, FaPenNib, 
  FaHome, FaHeart, FaMailBulk, FaBell,
  FaInstagram,  FaLinkedin, FaGithub, FaDiscord
} from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import GraphicDesign from './Routes/GraphicDesign';
import DigitalMarketing from './Routes/DigitalMarketing';
import VideoAnimation from './Routes/VideoAnimation';
import WebDevelopment from './Routes/WebDevelopment';
import ChatBox from './ChatBox'; 
import Messages from './Routes/Messages'; 
import Favorites from './Routes/Favorites';
import Praga from './Routes/praga';
import Sarah from './Routes/sarah';
import Arthur from './Routes/arthur';
import Thomas from './Routes/thomas';
import Footer from './Routes/footer';

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/graphic" element={<GraphicDesign />} />
          <Route path="/digital" element={<DigitalMarketing/>} />
          <Route path='/video' element={<VideoAnimation />} />
          <Route path='/web' element={<WebDevelopment />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/praga" element={<Praga />} />
          <Route path="/sarah" element={<Sarah />} />
          <Route path="/arthur" element={<Arthur />} />
          <Route path="/thomas" element={<Thomas />} />
          
        </Routes>
        
      </main>

      <ChatBox />
      
    </Router>
    
  );
}

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase();
    if (query.includes('graphic')) {
      navigate('/graphic');
    } else if (query.includes('digital')) {
      navigate('/digital');
    } else if (query.includes('video')) {
      navigate('/video');
    } else if (query.includes('web')) {
      navigate('/web');
    } 
    else if (query.includes('instagram')) {
      window.location.href = "https://www.instagram.com/i_pragathees._/";
    }
    else if (query.includes('linkedin')) {
      window.location.href = "https://www.linkedin.com/in/pragatheeswaran-s-k-9b6a0420a/";
    }
    else if (query.includes('github')) {
      window.location.href = "https://github.com/pragathees03";}
      else if(query.includes('discord')){
        window.location.href="https://canary.discord.com/channels/944949103178174474/944949103178174477"; 
      }
    else {
      navigate('/home');
    }
  };
  const handleNotificationsClick = () => {
    alert("You have no new notifications!");
  };

  const handleMessagesClick = () => {
    navigate('/messages'); 
  };

  const handleFavoritesClick = () => {
    navigate('/favorites'); 
  };

  return (
    <header>
      <div className='footer'>
        <h2 className='typo'>Lancido</h2>
        <h2 className='dot'>.</h2>
        <div className='searchalign'>
          <form className='search' onSubmit={handleSearchSubmit}>
            <input 
              type='text' 
              placeholder='Search...' 
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type='submit'>Search</button>
          </form>
        </div>
        <ul>
          <li className='home'><Link to="/home"><FaHome color='black'/></Link></li>
        </ul>
        <ul className='topicons'>
        <li><button onClick={handleNotificationsClick} className="icon-button"><FaBell /></button></li>
          <li><button onClick={handleMessagesClick} className="icon-button"><FaMailBulk /></button></li>
          <li><button onClick={handleFavoritesClick} className="icon-button"><FaHeart /></button></li>
        </ul>
        
        <div className='topics'>
          <ul>
            <li><Link to="/graphic"><FaBrush  color='white'/> Graphic Design & Branding</Link></li>
            <li><Link to="/digital"><FaBullhorn color='white' /> Digital Marketing & SEO</Link></li>
            <li><Link to="/video"><FaVideo color='white' /> Video & 3D Animation</Link></li>
            <li><Link to="/web"><FaCode color='white' /> Web Development & Programming</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}




function Home() {
  return (
    <>
      <div className='hello'><h2>Hello!</h2></div>
      <div className='explore'><h4>Explore popular lancers</h4></div>
      <div className='profile'>
       <Link to="/Praga"> <div className='profile-card'>
          <img src="/me1.jpg" alt="Profile" className='me' />
          <div className="details">
            <h3>Pragatheeswaran S K</h3>
            <p>Graphic Designer & Illustrator</p>
            <p>pragatheeswaranavani@gmail.com</p>
          </div>
        </div></Link>
       <Link to="/Sarah"> <div className='profile-card'>
          <img src="/Workingwomen.png" alt="Profile" className='Workingwomen' />
          <div className="details">
            <h3>Sarah</h3>
            <p>Content Writer & Content Creator</p>
            <p>sarah@gmail.com</p>
          </div>
        </div></Link>
        <Link to="/Arthur"> <div className='profile-card'>
          <img src="/colorist.jpg" alt="Profile" className='colorist' />
          <div className="details">
            <h3>Arthur Morgan</h3>
            <p>Professional Colorist & Editor</p>
            <p>arthurvalentine@gmail.com</p>
          </div>
        </div></Link>
        <Link to="/Thomas"><div className='profile-card'>
          <img src="/video.jpg" alt="Profile" className='video' />
          <div className="details">
            <h3>Thomas Shelby</h3>
            <p>Videographer & Photographer</p>
            <p>thomasshelby@gmail.com</p>
          </div>
        </div></Link>
      </div>
      <div className='inspire'><h4>Get Inspired by Work done</h4></div>
      <div className='poster'>
        <div className='poster-card'>
          <img src='fight club.jpg' alt='Fight Club' className='fightclub' />
          <img src='flawed.png' alt='Flawed' className='flawed' />
          <img src='cloud.jpg' alt='Cloud' className='cloud' />
          <img src='supra.jpg' alt='Supra' className='supra' />
          <img src='kohli.jpg' alt='Kohli' className='kohli' />
          <img src='69.jpg' alt='69' className='69' />
        </div>
      </div>
      <Footer />
    </>
  );
}

