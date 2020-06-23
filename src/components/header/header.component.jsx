import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import PROJECTS_DATA from '../../pages/projects.data';

import './header.styles.scss';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      projects: PROJECTS_DATA,
      listOpen: false,
    };
  }

  toggleList() {
    this.setState((prevState) => ({
      listOpen: !prevState.listOpen,
    }));
  }

  render() {
    const { projects, listOpen } = this.state;
    return (
      <div className='header'>
        <div className='name'>
          <h1>Odysseas Kouloukythas</h1>
        </div>
        <div className='options'>
          <Link className='option' to='/'>
            Home
          </Link>
          <div className='option'>
            <div className='dd-projects' onClick={() => this.toggleList()}>
              <div className='dd-title'>Projects</div>
              {listOpen && (
                <ul className='dd-projects-list'>
                  {projects.map((item) => (
                    <li className='dd-projects-title'>{item.title}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <Link className='option' to='/about'>
            About
          </Link>
          <Link className='option' to='/contact'>
            Contact
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
