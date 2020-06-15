import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl }) => (
  <div style={{ backgroundImage: `url(${imageUrl})` }} className='menu-item'>
    <div className='content'>
      <h3 className='title'>{title}</h3>
      <span className='subtitle'>Show more</span>
    </div>
  </div>
);

export default MenuItem;
