import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl }) => (
  <div className='menu-item'>
    <div
      className='background-image'
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className='content'>
      <h3 className='title'>{title}</h3>
      <span className='subtitle'>Show more</span>
    </div>
  </div>
);

export default MenuItem;
