import React from 'react';

import './footer.styles.scss';

const Footer = () => (
  <div className='footer'>
    <div className='social-icons'>
      <div className='icon'>
        <a href='https://www.facebook.com/odysseas.oddy' target='blank'>
          <i className='fa fa-facebook' />
        </a>
      </div>
      <div className='icon'>
        <a href='https://www.instagram.com/oddypk/' target='blank'>
          <i className='fa fa-instagram' />
        </a>
      </div>
      <div className='icon'>
        <a href='https://www.youtube.com/user/19odysseas91/' target='blank'>
          <i className='fa fa-youtube-play' />
        </a>
      </div>
    </div>
    <div className='copyright'>
      <p>&copy; 2020 Odysseas Kouloukythas</p>
    </div>
  </div>
);

export default Footer;
