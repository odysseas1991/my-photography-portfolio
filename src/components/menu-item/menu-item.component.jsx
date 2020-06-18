import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, routeName, history, match }) => (
  <div
    className='menu-item'
    onClick={() => history.push(`${match.url}${routeName}`)}
  >
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
export default withRouter(MenuItem);
