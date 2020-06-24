import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import PROJECTS_DATA from '../../pages/projects.data';

import './header.styles.scss';

class Header extends React.Component {
  constructor(props) {
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
    const { history, match } = this.props;
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
              <div className='dd-title'>
                Projects{' '}
                <div className='dd-title-symbol'>
                  {listOpen ? <div> -</div> : <div> +</div>}
                </div>
              </div>
              {listOpen && (
                <ul className='dd-projects-list'>
                  {projects.map((item) => (
                    <li
                      key={item.id}
                      className='dd-projects-title'
                      onClick={() =>
                        history.push(`${match.url}${item.routeName}`)
                      }
                    >
                      -{item.title}
                    </li>
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
