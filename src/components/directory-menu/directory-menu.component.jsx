import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectoryProjectsForPreview } from '../../redux/directory/directory.selectors';
import { selectProjectsForPreview } from '../../redux/projects/projects.selectors';

import MenuItem from '../menu-item/menu-item.component';

import './directory-menu.styles.scss';

const Directory = ({ projects, projects2 }) => {
  console.log(projects2);
  return (
    <div className='directory-menu'>
      {projects.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  projects: selectDirectoryProjectsForPreview,
  projects2: selectProjectsForPreview,
});

export default connect(mapStateToProps)(Directory);
