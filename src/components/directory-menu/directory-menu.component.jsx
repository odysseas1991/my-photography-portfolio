import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectProjectsForPreview } from '../../redux/projects/projects.selectors';

import MenuItem from '../menu-item/menu-item.component';

import './directory-menu.styles.scss';

const Directory = ({ projects }) => {
  console.log(projects);
  return (
    <div className='directory-menu'>
      {projects.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  projects: selectProjectsForPreview,
});

export default connect(mapStateToProps)(Directory);
