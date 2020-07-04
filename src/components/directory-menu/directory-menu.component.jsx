import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectoryProjects } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import './directory-menu.styles.scss';

const Directory = ({ projects }) => (
  <div className='directory-menu'>
    {projects.map(({ id, ...otherProps }) => (
      <MenuItem key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  projects: selectDirectoryProjects,
});

export default connect(mapStateToProps)(Directory);
