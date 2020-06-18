import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import PROJECTS_DATA from '../../pages/projects.data';

import './directory-menu.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      projects: PROJECTS_DATA,
    };
  }

  render() {
    const { projects } = this.state;
    return (
      <div className='directory-menu'>
        {projects.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
