import React from 'react';

function Home() {
  return (
    <>
      <div className='hello'><h2>Hello!</h2></div>
      <div className='explore'><h4>Explore popular lancers</h4></div>
      <div className='profile'>
        <div className='profile-card'>
          <img src="/me1.jpg" alt="Profile" className='me' />
          <div className="details">
            <h3>Pragatheeswaran S K</h3>
            <p>Graphic Designer & Illustrator</p>
            <p>pragatheeswaranavani@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
