import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <h3 className='title'>Street Stories</h3>
          <span className='subtitle'>Show more</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h3 className='title'>Coronavirus Era</h3>
          <span className='subtitle'>Show more</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h3 className='title'>Lavrio refuges story</h3>
          <span className='subtitle'>Show more</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
